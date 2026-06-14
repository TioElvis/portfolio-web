"use client";
import { Fragment, useEffect, useState } from "react";

import type { Alert } from "@/types/terminal";

import { ASCII_TIOELVIS } from "@/lib/ascii";

import { LoadingBar } from "./loading-bar";
import { TerminalAlert } from "./terminal-alert";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { RenderTextASCII } from "./render-text-ascii";

import { useIsMounted } from "@/hooks/use-is-mounted";

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
  const [showLanding, setShowLanding] = useState(false);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted) return;

    const timeoutId = setTimeout(() => setShowLanding(true), 4000);

    return () => clearTimeout(timeoutId);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <main className="w-full h-screen">
      {showLanding ? (
        <Fragment>{children}</Fragment>
      ) : (
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
        </MaxWidthWrapper>
      )}
    </main>
  );
}
