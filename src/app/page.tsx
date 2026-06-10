"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { ASCII_TIOELVIS } from "@/lib/utils";

import { PreASCII } from "@/components/pre-ascii";
import { LoadingBar } from "@/components/loading-bar";
import { TerminalAlert } from "@/components/terminal-alert";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export const ALERTS = [
  {
    alert: {
      cause: "system",
      title: "Compiling project",
      message: "OK",
    },
    delay: 0.5,
  },
  {
    alert: {
      cause: "boot",
      title: "Loading network service",
      message: "OK",
    },
    delay: 1,
  },

  {
    alert: {
      cause: "boot",
      title: "Loading pages",
      message: "OK",
    },
    delay: 1.5,
  },
  {
    alert: {
      cause: "init",
      title: "Initializing user interface",
      message: "OK",
    },
    delay: 2,
  },
  {
    alert: {
      cause: "done",
      title: "System ready",
      message: "FINISH",
    },
    delay: 2.5,
  },
];

export default function Page() {
  const asciiTextRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      asciiTextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
    );
  }, []);

  return (
    <main className="w-full h-screen">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8">
        <article ref={asciiTextRef} className="flex">
          {ASCII_TIOELVIS.map((e, index) => {
            return (
              <PreASCII
                key={index}
                className="text-[9px] sm:text-xs md:text-sm text-primary">
                {e}
              </PreASCII>
            );
          })}
        </article>
        <section className="w-full md:w-2xl flex flex-col gap-2">
          {ALERTS.map((e, index) => {
            return (
              <TerminalAlert alert={e.alert} delay={e.delay} key={index} />
            );
          })}
        </section>
        <LoadingBar />
      </MaxWidthWrapper>
    </main>
  );
}
