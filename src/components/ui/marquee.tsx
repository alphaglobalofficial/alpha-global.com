import * as React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  speedClassName = "animate-marquee",
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speedClassName?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden mask-fade-x",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-16",
          reverse ? "animate-marquee-reverse" : speedClassName,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex w-max shrink-0 items-center gap-16",
          reverse ? "animate-marquee-reverse" : speedClassName,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
