import { ASCII_ABOUT, ASCII_ME } from "@/lib/ascii";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";

export function About() {
  return (
    <section id="about" className="w-full min-h-screen py-20">
      <MaxWidthWrapper className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px]">
          <RenderTextASCII ASCII_TEXT={ASCII_ABOUT} />
          <RenderTextASCII ASCII_TEXT={ASCII_ME} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
