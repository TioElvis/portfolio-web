import { Navbar } from "./navbar";
import { TioElvisASCII } from "@/components/tio-elvis-ascii";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Header() {
  return (
    <header className="w-full h-14 fixed border-b border-border bg-background/80 backdrop-blur-xl">
      <MaxWidthWrapper className="flex items-center justify-between">
        <TioElvisASCII />
        <Navbar />
      </MaxWidthWrapper>
    </header>
  );
}
