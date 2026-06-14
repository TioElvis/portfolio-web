import { ASCII_TIOELVIS } from "@/lib/ascii";

import { Navbar } from "./navbar";
import { RenderTextASCII } from "@/components/render-text-ascii";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Header() {
  return (
    <header className="w-full h-14 fixed border-b border-border bg-background/60 backdrop-blur-xl z-50">
      <MaxWidthWrapper className="flex items-center justify-between">
        <RenderTextASCII ASCII_TEXT={ASCII_TIOELVIS} className="text-[4px]" />
        <Navbar />
      </MaxWidthWrapper>
    </header>
  );
}
