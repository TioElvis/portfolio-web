"use client";
import {
  ASCII_ARROW_DOWN,
  ASCII_BACKEND,
  ASCII_DEVELOPER,
  ASCII_ETHICAL,
  ASCII_HACKER,
} from "@/lib/ascii";

import { useIsMobile } from "@/hooks/use-mobile";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";
import { InteractiveShell } from "@/components/interactive-shell";

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="w-full h-screen py-20">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-4">
        <section className="w-full flex items-center gap-4 text-[4px]">
          <div>
            <RenderTextASCII
              ASCII_TEXT={ASCII_BACKEND}
              className="text-secondary"
            />
            <RenderTextASCII
              ASCII_TEXT={ASCII_DEVELOPER}
              className="text-secondary"
            />
          </div>
          <div>
            <RenderTextASCII
              ASCII_TEXT={ASCII_ETHICAL}
              className="text-accent"
            />
            <RenderTextASCII
              ASCII_TEXT={ASCII_HACKER}
              className="text-accent"
            />
          </div>
        </section>
        <InteractiveShell />
        {isMobile && (
          <div className="w-full h-48 flex items-center justify-center">
            <RenderTextASCII
              ASCII_TEXT={ASCII_ARROW_DOWN}
              className="text-[6px]"
            />
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
}
