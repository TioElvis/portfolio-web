import { ASCII_PROJECTS } from "@/lib/ascii";

import { PreASCII } from "@/components/pre-ascii";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen py-20">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center gap-4 text-[5px]">
          <article className="flex">
            {ASCII_PROJECTS.map((e, index) => {
              return <PreASCII key={index}>{e}</PreASCII>;
            })}
          </article>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
