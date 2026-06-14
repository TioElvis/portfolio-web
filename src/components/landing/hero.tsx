"use client";
import { HeroText } from "./hero-text";

import { ASCII_ARROW_DOWN } from "@/lib/ascii";

import { useIsMobile } from "@/hooks/use-mobile";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";
import { InteractiveShell } from "@/components/interactive-shell";

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="w-full h-screen md:py-20 pt-20">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-4">
        <HeroText />
        <InteractiveShell />
        {isMobile && (
          <div className="w-full h-72 flex items-center justify-center">
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
