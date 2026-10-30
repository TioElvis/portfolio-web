import Image from "next/image";
import { IconCode, IconLock, IconServer } from "@tabler/icons-react";

import { ASCII_ABOUT, ASCII_ME } from "@/lib/ascii";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ABILITIES = [
  {
    name: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS, GSAP.",
    Icon: IconCode,
  },
  {
    name: "Backend",
    description: "Node.js, NestJS, PostgreSQL, MongoDB.",
    Icon: IconServer,
  },
  {
    name: "Cybersecurity",
    description: "Pentesting, system defense, Kali Linux.",
    Icon: IconLock,
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="w-full py-20 md:py-28">
      <MaxWidthWrapper className="flex flex-col gap-10">
        <SectionHeading
          id="about-title"
          title="about me"
          ascii={[ASCII_ABOUT, ASCII_ME]}
        />
        <div className="grid gap-8 md:grid-cols-[3fr_2fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-background-code ring-1 ring-border md:hidden">
              <Image
                src="/evera.png"
                alt="Portrait of Elvis Vera"
                fill
                sizes="224px"
                className="origin-[50%_42%] scale-[1.9] object-cover object-[50%_42%]"
              />
            </div>
            <div className="flex max-w-prose flex-col gap-4">
              <p>
                I&apos;m a Venezuelan developer born in Caracas. Growing up, I
                discovered a passion for computer science and building
                applications, and I keep learning new things to sharpen my
                skills and knowledge.
              </p>
              <p className="text-muted-foreground">
                I use this portfolio to show my projects and share what I
                learn.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {ABILITIES.map(({ name, description, Icon }) => {
                return (
                  <li key={name}>
                    <Card className="h-full transition-shadow hover:ring-primary/50">
                      <CardHeader className="flex items-center gap-2">
                        <Icon aria-hidden className="size-5 text-primary" />
                        <h3 className="text-base font-bold">{name}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{description}</p>
                      </CardContent>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative hidden md:block min-h-[28rem] overflow-hidden rounded-xl bg-linear-to-b from-background-code to-background-surface ring-1 ring-border">
            <Image
              src="/evera.png"
              alt="Portrait of Elvis Vera"
              fill
              sizes="(min-width: 1152px) 440px, 40vw"
              className="object-cover object-[50%_80%]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
