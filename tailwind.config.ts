import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--electric) / <alpha-value>)",
        electric: {
          DEFAULT: "hsl(var(--electric) / <alpha-value>)",
          50: "#eef4ff",
          100: "#dbe8ff",
          200: "#bcd4ff",
          300: "#8db8ff",
          400: "#5993ff",
          500: "hsl(217 100% 63%)",
          600: "#2f5fe0",
          700: "#2649b3",
          800: "#233f8f",
          900: "#213872",
        },
        violet: {
          DEFAULT: "hsl(var(--violet) / <alpha-value>)",
          50: "#f6f2ff",
          100: "#ede4ff",
          200: "#dccbff",
          300: "#c2a4ff",
          400: "#a476ff",
          500: "hsl(262 83% 66%)",
          600: "#7c3aed",
          700: "#682dc7",
          800: "#57279f",
          900: "#48237f",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px hsl(var(--electric) / 0.4)",
        glow: "0 0 40px -8px hsl(var(--electric) / 0.45), 0 0 80px -20px hsl(var(--violet) / 0.35)",
        "glow-lg": "0 0 80px -12px hsl(var(--electric) / 0.5), 0 0 140px -30px hsl(var(--violet) / 0.4)",
        "glow-violet": "0 0 40px -8px hsl(var(--violet) / 0.5)",
        card: "0 1px 0 0 hsl(var(--foreground) / 0.04) inset, 0 1px 2px 0 rgb(0 0 0 / 0.3)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(hsl(var(--foreground) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.05) 1px, transparent 1px)",
        "gradient-electric": "linear-gradient(135deg, hsl(var(--electric)), hsl(var(--violet)))",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        noise: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out 1.5s infinite",
        "spin-slow": "spin 18s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        snappy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
