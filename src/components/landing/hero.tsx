import {
  ASCII_BACKEND,
  ASCII_DEVELOPER,
  ASCII_ETHICAL,
  ASCII_HACKER,
} from "@/lib/ascii";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";
import { MobileArrowDown } from "@/components/mobile-arrow-down";
import { InteractiveShell } from "@/components/interactive-shell";

export function Hero() {
  return (
    <section id="hero" className="w-full h-screen py-20">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-4">
        <section className="w-full flex items-center gap-4 text-[3px] md:text-[4px] lg:text-[5px]">
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
        <MobileArrowDown />
      </MaxWidthWrapper>
    </section>
  );
}
