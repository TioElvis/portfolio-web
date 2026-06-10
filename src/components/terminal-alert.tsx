"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

interface Props {
  alert: {
    cause: string;
    title: string;
    message: string;
  };
  delay: number;
}

export function TerminalAlert({ alert, delay }: Props) {
  const alertRef = useRef(null);

  useGSAP(() => {
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
        <span>{alert.title}</span>
      </div>
      <div>
        [<span className="text-primary">{alert.message}</span>]
      </div>
    </div>
  );
}
