import { ASCII_CONTACT } from "@/lib/ascii";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";

export function Contact() {
  return (
    <footer id="contact" className="w-full min-h-screen scroll-mt-20">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center gap-4">
          <RenderTextASCII
            ASCII_TEXT={ASCII_CONTACT}
            className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px]"
          />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
