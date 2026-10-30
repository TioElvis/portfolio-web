import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { SITE } from "@/lib/site";
import { ASCII_CONTACT, ASCII_ME, ASCII_PENGUIN } from "@/lib/ascii";

import { CopyEmail } from "./copy-email";

import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { RenderTextASCII } from "@/components/render-text-ascii";

const CONTACTS = [
  {
    name: "Github",
    icon: IconBrandGithub,
    to: SITE.github,
  },
  {
    name: "Linkedin",
    icon: IconBrandLinkedin,
    to: SITE.linkedin,
  },
  {
    name: "Youtube",
    icon: IconBrandYoutube,
    to: SITE.youtube,
  },
];

export function Contact() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="w-full border-t border-border-subtle pt-20 pb-8 md:pt-28">
      <MaxWidthWrapper className="flex flex-col items-center gap-10">
        <SectionHeading
          id="contact-title"
          title="contact me"
          ascii={[ASCII_CONTACT, ASCII_ME]}
        />
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16">
          <div className="flex w-full max-w-md flex-col gap-4">
            <p className="text-muted-foreground">
              Have a project, a job offer or a question? Write me and I&apos;ll
              get back to you.
            </p>
            <CopyEmail email={SITE.email} />
            <ul className="grid grid-cols-3 gap-2">
              {CONTACTS.map((e) => {
                return (
                  <li key={e.name}>
                    <a
                      href={e.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "default",
                        size: "lg",
                        className: "w-full",
                      })}>
                      <e.icon aria-hidden />
                      <span className="hidden sm:inline">{e.name}</span>
                      <span className="sr-only sm:hidden">{e.name}</span>
                      <IconArrowUpRight
                        aria-hidden
                        className="hidden sm:block size-3.5 opacity-60"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div aria-hidden className="text-[6px] md:text-[7px] lg:text-[8px]">
            <RenderTextASCII ASCII_TEXT={ASCII_PENGUIN} />
          </div>
        </div>
        <div className="text-center text-ghost-foreground">
          <p>
            &copy; {new Date().getFullYear()} TioElvis. All rights reserved.
          </p>
          <p>Built with ❤️ and lots of ☕ by TioElvis</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
