import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { ASCII_CONTACT, ASCII_ME, ASCII_PENGUIN } from "@/lib/ascii";

import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";

const CONTACTS = [
  {
    name: "Github",
    icon: IconBrandGithub,
    to: "https://github.com/TioElvis",
  },
  {
    name: "Linkedin",
    icon: IconBrandLinkedin,
    to: "https://www.linkedin.com/in/elvis-vera-3657ba365/",
  },
  {
    name: "Youtube",
    icon: IconBrandYoutube,
    to: "https://www.youtube.com/@tioelvis4615",
  },
];

export function Contact() {
  return (
    <footer id="contact" className="w-full h-dvh scroll-mt-20">
      <MaxWidthWrapper className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-4">
          <RenderTextASCII
            ASCII_TEXT={ASCII_CONTACT}
            className="text-[4px] sm:text-[6px] md:text-[7px] lg:text-[8px]"
          />
          <RenderTextASCII
            ASCII_TEXT={ASCII_ME}
            className="text-[4px] sm:text-[6px] md:text-[7px] lg:text-[8px]"
          />
        </div>
        <div className="flex flex-col items-center gap-4 w-full md:w-96">
          <div className="w-full flex flex-col gap-4">
            {CONTACTS.map((e) => {
              return (
                <Button
                  key={e.name}
                  nativeButton={false}
                  render={
                    <Link href={e.to} target="_blank">
                      {e.name}
                    </Link>
                  }
                />
              );
            })}
          </div>
          <div className="flex-1 p-4 rounded-md">
            <RenderTextASCII
              ASCII_TEXT={ASCII_PENGUIN}
              className="text-[6px] sm:text-[7px] md:text-[8px]"
            />
          </div>
        </div>
        <section className="text-center">
          <p>
            &copy; {new Date().getFullYear()} TioElvis. All rights reserved.
          </p>
          <p>Built with ❤️ and lots of ☕ by TioElvis</p>
        </section>
      </MaxWidthWrapper>
    </footer>
  );
}
