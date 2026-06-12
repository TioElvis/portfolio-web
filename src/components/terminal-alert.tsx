"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

import type { Alert } from "@/types/terminal";

interface Props {
  alert: Alert;
  delay?: number;
  animated?: boolean;
}

export function TerminalAlert({ alert, delay = 0, animated = false }: Props) {
  const alertRef = useRef(null);

  useGSAP(() => {
    if (!animated) return;

    const tl = gsap.timeline();

    tl.fromTo(
      alertRef.current,
      { opacity: 0 },
      { opacity: 1, delay, duration: 1 },
    );
  }, []);

  return (
    <div ref={alertRef} className="text-xs md:text-sm flex justify-between">
      <div className="flex gap-2">
        <span>
          [<span className="text-accent">{alert.cause.toUpperCase()}</span>]
        </span>
        <span>{alert.message}</span>
      </div>
      <div>
        [
        <span className={cn(alert.isOk ? "text-primary" : "text-destructive")}>
          {alert.statusMessage.toLocaleUpperCase()}
        </span>
        ]
      </div>
    </div>
  );
}
