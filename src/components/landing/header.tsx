import { Navbar } from "./navbar";
import { Logo } from "@/components/logo";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Header() {
  return (
    <header className="w-full h-14 fixed top-0 border-b border-border bg-background/60 backdrop-blur-xl z-50">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />
        <Navbar />
      </MaxWidthWrapper>
    </header>
  );
}
