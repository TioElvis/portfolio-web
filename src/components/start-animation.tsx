"use client";
import { useEffect, useState } from "react";

import type { Alert } from "@/types/terminal";

import { ASCII_TIOELVIS } from "@/lib/ascii";

import { LoadingBar } from "./loading-bar";
import { TerminalAlert } from "./terminal-alert";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { RenderTextASCII } from "./render-text-ascii";

export const BOOT_SEEN_KEY = "boot-seen";

// Runs before paint: the boot screen only plays once per session
export const BOOT_SCRIPT = `try{if(sessionStorage.getItem("${BOOT_SEEN_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.boot="skip"}catch(e){}`;

export const ALERTS: { alert: Alert; delay: number }[] = [
  {
    alert: {
      cause: "system",
      message: "Compiling project",
      isOk: true,
      statusMessage: "ok",
    },
    delay: 0.5,
  },
  {
    alert: {
      cause: "boot",
      message: "Loading network service",
      isOk: true,
      statusMessage: "ok",
    },
    delay: 1,
  },

  {
    alert: {
      cause: "boot",
      message: "Loading pages",
      isOk: true,
      statusMessage: "ok",
    },
    delay: 1.5,
  },
  {
    alert: {
      cause: "init",
      message: "Initializing user interface",
      isOk: true,
      statusMessage: "ok",
    },
    delay: 2,
  },
  {
    alert: {
      cause: "done",
      message: "System ready",
      isOk: true,
      statusMessage: "finish",
    },
    delay: 2.5,
  },
];

interface Props {
  children: React.ReactNode;
}

export function StartAnimation({ children }: Props) {
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    // Already hidden by CSS: just drop it from the DOM
    if (document.documentElement.dataset.boot === "skip") {
      const frameId = requestAnimationFrame(() => setShowBoot(false));
      return () => cancelAnimationFrame(frameId);
    }

    try {
      sessionStorage.setItem(BOOT_SEEN_KEY, "1");
    } catch {}

    const skip = () => setShowBoot(false);
    const timeoutId = setTimeout(skip, 4000);

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  return (
    <>
      {children}
      {showBoot && (
        <div
          data-slot="boot-screen"
          aria-hidden
          className="fixed inset-0 z-[60] bg-background">
          <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8">
            <RenderTextASCII
              ASCII_TEXT={ASCII_TIOELVIS}
              className="text-[7px] md:text-[8px] lg:text-[9px]"
            />
            <section className="w-full md:w-2xl flex flex-col gap-2">
              {ALERTS.map((e, index) => {
                return (
                  <TerminalAlert
                    alert={e.alert}
                    delay={e.delay}
                    key={index}
                    animated
                  />
                );
              })}
            </section>
            <LoadingBar />
            <p className="text-ghost-foreground">Press any key to skip</p>
          </MaxWidthWrapper>
        </div>
      )}
    </>
  );
}
