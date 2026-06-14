import { ASCII_PROJECTS } from "@/lib/ascii";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";

export function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen py-20">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center gap-4">
          <RenderTextASCII
            ASCII_TEXT={ASCII_PROJECTS}
            className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px]"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
