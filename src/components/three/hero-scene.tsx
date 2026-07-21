"use client";

import * as React from "react";
import * as THREE from "three";

interface ShapeConfig {
  mesh: THREE.Mesh;
  glow: THREE.Sprite;
  floatSpeed: number;
  floatAmplitude: number;
  floatPhase: number;
  rotSpeed: THREE.Vector3;
  baseY: number;
}

function createGlowTexture(color: string): THREE.Texture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, `${color}aa`);
    gradient.addColorStop(0.4, `${color}44`);
    gradient.addColorStop(1, `${color}00`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function HeroScene({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let cancelled = false;
    let disposeScene: (() => void) | null = null;

    // Defer the heavy WebGL setup by one frame so it never competes with the
    // route transition's own commit/paint — purely a scheduling safeguard.
    const deferredSetup = requestAnimationFrame(() => {
      if (cancelled) return;

      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        camera.position.set(0, 0, 11);

        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        scene.add(new THREE.AmbientLight(0xffffff, 0.35));
        const blueLight = new THREE.PointLight(0x3d7fff, 6, 30);
        blueLight.position.set(-6, 3, 6);
        scene.add(blueLight);
        const violetLight = new THREE.PointLight(0x9b5cff, 6, 30);
        violetLight.position.set(6, -3, 4);
        scene.add(violetLight);

        const group = new THREE.Group();
        scene.add(group);

        const palette = [0x3d7fff, 0x9b5cff, 0x5993ff, 0xa476ff, 0x2f5fe0];
        const geometries = [
          new THREE.IcosahedronGeometry(1, 0),
          new THREE.OctahedronGeometry(1, 0),
          new THREE.TorusGeometry(0.85, 0.28, 16, 64),
          new THREE.IcosahedronGeometry(0.7, 1),
          new THREE.OctahedronGeometry(0.9, 0),
        ];

        const positions: [number, number, number][] = [
          [-3.2, 1.4, -1.5],
          [3, -1.2, -2.4],
          [1.6, 2.1, -3.2],
          [-1.8, -1.9, -1],
          [3.6, 1.6, -3.8],
        ];
        const scales = [1.15, 0.85, 0.95, 0.65, 0.55];

        const shapes: ShapeConfig[] = geometries.map((geometry, i) => {
          const color = palette[i % palette.length];
          const material = new THREE.MeshStandardMaterial({
            color,
            emissive: color,
            emissiveIntensity: 0.55,
            roughness: 0.25,
            metalness: 0.35,
            transparent: true,
            opacity: 0.92,
            wireframe: i % 3 === 1,
          });
          const mesh = new THREE.Mesh(geometry, material);
          const [x, y, z] = positions[i];
          mesh.position.set(x, y, z);
          mesh.scale.setScalar(scales[i]);
          mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

          const glowTexture = createGlowTexture(`#${color.toString(16).padStart(6, "0")}`);
          const glowMaterial = new THREE.SpriteMaterial({
            map: glowTexture,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          });
          const glow = new THREE.Sprite(glowMaterial);
          glow.scale.setScalar(scales[i] * 5.2);
          glow.position.copy(mesh.position);

          group.add(glow);
          group.add(mesh);

          return {
            mesh,
            glow,
            floatSpeed: 0.4 + Math.random() * 0.3,
            floatAmplitude: 0.35 + Math.random() * 0.25,
            floatPhase: Math.random() * Math.PI * 2,
            rotSpeed: new THREE.Vector3(
              (Math.random() - 0.5) * 0.25,
              (Math.random() - 0.5) * 0.25,
              (Math.random() - 0.5) * 0.15
            ),
            baseY: y,
          };
        });

        let frameId = 0;
        let targetParallaxX = 0;
        let targetParallaxY = 0;
        let currentParallaxX = 0;
        let currentParallaxY = 0;
        const startTime = performance.now();
        let isRunning = false;
        let isIntersecting = true;

        const handlePointerMove = (event: PointerEvent) => {
          const rect = container.getBoundingClientRect();
          targetParallaxX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          targetParallaxY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        };

        const setSize = () => {
          const { clientWidth, clientHeight } = container;
          if (clientWidth === 0 || clientHeight === 0) return;
          camera.aspect = clientWidth / clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(clientWidth, clientHeight, false);
        };

        const renderStaticFrame = () => {
          setSize();
          renderer.render(scene, camera);
        };

        const animate = (now: number) => {
          const elapsed = (now - startTime) / 1000;

          currentParallaxX += (targetParallaxX - currentParallaxX) * 0.02;
          currentParallaxY += (targetParallaxY - currentParallaxY) * 0.02;
          group.rotation.y = currentParallaxX * 0.18;
          group.rotation.x = -currentParallaxY * 0.12;

          shapes.forEach(({ mesh, glow, floatSpeed, floatAmplitude, floatPhase, rotSpeed, baseY }) => {
            mesh.rotation.x += rotSpeed.x * 0.02;
            mesh.rotation.y += rotSpeed.y * 0.02;
            mesh.rotation.z += rotSpeed.z * 0.02;
            const y = baseY + Math.sin(elapsed * floatSpeed + floatPhase) * floatAmplitude;
            mesh.position.y = y;
            glow.position.y = y;
          });

          renderer.render(scene, camera);
          frameId = requestAnimationFrame(animate);
        };

        const startLoop = () => {
          if (isRunning || reducedMotion) return;
          isRunning = true;
          frameId = requestAnimationFrame(animate);
        };

        const stopLoop = () => {
          isRunning = false;
          cancelAnimationFrame(frameId);
        };

        const resizeObserver = new ResizeObserver(() => {
          if (reducedMotion) {
            renderStaticFrame();
          } else {
            setSize();
          }
        });
        resizeObserver.observe(container);

        const intersectionObserver = new IntersectionObserver(
          ([entry]) => {
            isIntersecting = entry.isIntersecting;
            if (isIntersecting && !document.hidden) {
              startLoop();
            } else {
              stopLoop();
            }
          },
          { threshold: 0 }
        );
        intersectionObserver.observe(container);

        const handleVisibility = () => {
          if (document.hidden) {
            stopLoop();
          } else if (isIntersecting) {
            startLoop();
          }
        };
        document.addEventListener("visibilitychange", handleVisibility);

        setSize();
        if (reducedMotion) {
          renderStaticFrame();
        } else {
          container.addEventListener("pointermove", handlePointerMove);
          startLoop();
        }

        disposeScene = () => {
          stopLoop();
          resizeObserver.disconnect();
          intersectionObserver.disconnect();
          document.removeEventListener("visibilitychange", handleVisibility);
          container.removeEventListener("pointermove", handlePointerMove);
          shapes.forEach(({ mesh, glow }) => {
            mesh.geometry.dispose();
            (mesh.material as THREE.Material).dispose();
            (glow.material as THREE.SpriteMaterial).map?.dispose();
            (glow.material as THREE.SpriteMaterial).dispose();
          });
          renderer.dispose();
        };
      } catch (error) {
        // Defensive: a WebGL failure should never take down the page —
        // the hero simply renders without the decorative background.
        console.error("HeroScene failed to initialize:", error);
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(deferredSetup);
      disposeScene?.();
    };
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
