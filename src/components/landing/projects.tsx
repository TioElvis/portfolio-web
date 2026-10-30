import { IconArrowUpRight, IconFolder } from "@tabler/icons-react";

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
import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SectionHeading } from "@/components/section-heading";

export async function Projects() {
  const repositories = await getAllRepositories({ per_page: 3 });

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="w-full py-20 md:py-28">
      <MaxWidthWrapper className="flex flex-col items-center gap-10">
        <SectionHeading
          id="projects-title"
          title="last projects"
          ascii={[ASCII_LAST, ASCII_PROJECTS]}
        />
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
        <ul className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((e) => {
            return (
              <li key={e.html_url} className="flex">
                <RepositoryCard repository={e} />
              </li>
            );
          })}
        </ul>
        {repositories.length > 0 && (
          <a
            href="https://github.com/TioElvis?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "link" })}>
            View all on GitHub <IconArrowUpRight aria-hidden />
          </a>
        )}
      </MaxWidthWrapper>
    </section>
  );
}
