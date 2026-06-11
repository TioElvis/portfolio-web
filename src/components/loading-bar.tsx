"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

export function LoadingBar() {
  const sectionRef = useRef(null);
  const loadingBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 2.5, duration: 1 },
    ).fromTo(
      loadingBarRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 1,
        onUpdate() {
          const ratio = this.ratio;
          setProgress(Math.round(ratio * 100));
        },
      },
      "<",
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full md:w-2xl flex items-center gap-2">
      <div className="flex-1">
        <div ref={loadingBarRef} className="h-4 bg-foreground"></div>
      </div>
      <span className="text-primary">{progress}%</span>
    </section>
  );
}
