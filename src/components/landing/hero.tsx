import {
  ASCII_BACKEND,
  ASCII_DEVELOPER,
  ASCII_ETHICAL,
  ASCII_HACKER,
} from "@/lib/ascii";

import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";
import { InteractiveShell } from "@/components/interactive-shell";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="w-full min-h-dvh flex pt-20 pb-10">
      <MaxWidthWrapper className="flex flex-col justify-center gap-8 md:gap-10">
        <div
          aria-hidden
          className="hidden md:flex w-full items-center gap-4 text-[4px] lg:text-[5px]">
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
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-primary">$ whoami</p>
          <h1 id="hero-title" className="text-3xl md:text-4xl">
            Elvis Vera
            <span className="block text-lg md:text-xl font-medium text-muted-foreground">
              <span className="text-secondary-bright">Backend developer</span>{" "}
              &amp; <span className="text-accent">ethical hacker</span>
            </span>
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Born in Caracas, Venezuela. I build web applications with Node.js,
            NestJS and Next.js, and I study how to break them so they stay
            secure.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className={buttonVariants({ variant: "solid", size: "lg" })}>
              See my projects
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}>
              Contact me
            </a>
          </div>
        </div>

        <InteractiveShell className="h-[24rem] md:h-[22rem] lg:h-[24rem]" />
      </MaxWidthWrapper>
    </section>
  );
}
