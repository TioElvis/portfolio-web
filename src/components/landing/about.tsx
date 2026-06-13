import { ASCII_ABOUT, ASCII_ME } from "@/lib/ascii";

import { PreASCII } from "@/components/pre-ascii";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function About() {
  return (
    <section id="about" className="w-full min-h-screen py-20">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center gap-4 text-[5px]">
          <article className="flex">
            {ASCII_ABOUT.map((e, index) => {
              return <PreASCII key={index}>{e}</PreASCII>;
            })}
          </article>
          <article className="flex">
            {ASCII_ME.map((e, index) => {
              return <PreASCII key={index}>{e}</PreASCII>;
            })}
          </article>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
