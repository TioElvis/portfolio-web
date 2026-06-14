"use client";
import Image from "next/image";
import { IconCode, IconLock, IconServer } from "@tabler/icons-react";

import { ASCII_ABOUT, ASCII_ME } from "@/lib/ascii";

import { useIsMobile } from "@/hooks/use-mobile";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ABILITIES = [
  {
    name: "Frontend",
    description: "React, Nextjs, TypeScript, Tailwind CSS, GSAP.",
    Icon: IconCode,
  },
  {
    name: "Backend",
    description: "Nodejs, Nestjs, PostgreSQL, MongoDB.",
    Icon: IconServer,
  },
  {
    name: "Cybersecurity",
    description: "Pentesting, System Defense, KaliLinux.",
    Icon: IconLock,
  },
];

export function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="w-full h-dvh scroll-mt-20">
      <MaxWidthWrapper className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4 text-[4px] sm:text-[6px] md:text-[7px] lg:text-[8px]">
          <RenderTextASCII ASCII_TEXT={ASCII_ABOUT} />
          <RenderTextASCII ASCII_TEXT={ASCII_ME} />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p>
                I am a Venezuelan guy, born in Caracas that growing up
                discovered his passion for computer science and application
                development. In the future, I want to keep learning new things
                in order to continuously sharpen my skills and knowledge.
              </p>
              <p>
                So I use this portfolio/blog to show my projects and share my
                knowledge.
              </p>
            </div>
            <section className="flex flex-col gap-4">
              {ABILITIES.map(({ name, description, Icon }) => {
                return (
                  <Card key={name} className="hover:ring-primary/50">
                    <CardHeader>
                      <Icon className="size-6 text-primary" />
                      <p className="font-bold">{name}</p>
                    </CardHeader>
                    <CardContent>
                      <p>{description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </section>
          </div>
          {!isMobile && (
            <div className="flex h-auto items-center justify-center flex-1 relative">
              <article className="relative w-full h-full">
                <Image
                  src="/evera.png"
                  alt="evera"
                  fill
                  className="object-cover"
                  priority
                />
              </article>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
