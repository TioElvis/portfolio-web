import { HeroText } from "./hero-text";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { InteractiveShell } from "@/components/interactive-shell";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen py-20">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-4">
        <HeroText />
        <InteractiveShell />
      </MaxWidthWrapper>
    </section>
  );
}
