import Link from "next/link";
import { IconFolder } from "@tabler/icons-react";

import { getAllRepositories } from "@/lib/octokit";
import { ASCII_LAST, ASCII_PROJECTS } from "@/lib/ascii";

import { RepositoryCard } from "./repository-card";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { RenderTextASCII } from "@/components/render-text-ascii";
import { MobileArrowDown } from "@/components/mobile-arrow-down";

export async function Projects() {
  const repositories = await getAllRepositories({ per_page: 3 });

  return (
    <section
      id="projects"
      className="w-full min-h-screen scroll-mt-20 md:scroll-mt-0 md:flex md:justify-center md:items-center">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-4 text-[4px] sm:text-[6px] md:text-[7px] lg:text-[8px]">
          <RenderTextASCII ASCII_TEXT={ASCII_LAST} />
          <RenderTextASCII ASCII_TEXT={ASCII_PROJECTS} />
        </div>
        {repositories.length === 0 && (
          <Empty className="max-w-96">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <IconFolder />
              </EmptyMedia>
              <EmptyTitle>No data</EmptyTitle>
              <EmptyDescription>
                Wait until I add a project to github :)
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
        <div className="w-full flex flex-col gap-4">
          {repositories.map((e) => {
            return <RepositoryCard key={e.html_url} repository={e} />;
          })}
        </div>
        {repositories.length > 0 && (
          <Button
            nativeButton={false}
            variant="link"
            render={
              <Link
                href="https://github.com/TioElvis?tab=repositories"
                target="_blank">
                View all
              </Link>
            }
          />
        )}
        <MobileArrowDown />
      </MaxWidthWrapper>
    </section>
  );
}
