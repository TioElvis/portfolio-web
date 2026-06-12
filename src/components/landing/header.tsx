import { Navbar } from "./navbar";
import { TioElvisASCII } from "@/components/tioelvis-ascii";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Header() {
  return (
    <header className="w-full h-14 fixed border-b border-border bg-background/60 backdrop-blur-xl z-50">
      <MaxWidthWrapper className="flex items-center justify-between">
        <TioElvisASCII />
        <Navbar />
      </MaxWidthWrapper>
    </header>
  );
}
