import { HeroText } from "./hero-text";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Hero() {
  return (
    <section id="hero" className="w-full h-screen py-20">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-4">
        <HeroText />
        {/* Interactive Shell */}
      </MaxWidthWrapper>
    </section>
  );
}
