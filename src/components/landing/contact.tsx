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
            className="text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px]"
          />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
