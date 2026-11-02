import { Suspense } from "react";
import { connection } from "next/server";
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

const PER_PAGE = 3;

export function Projects() {
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
        <Suspense fallback={<RepositoriesSkeleton />}>
          <Repositories />
        </Suspense>
      </MaxWidthWrapper>
    </section>
  );
}

// Fetched on every visit, so a new repository shows up right away
async function Repositories() {
  await connection();
  const repositories = await getAllRepositories({ per_page: PER_PAGE });

  if (repositories.length === 0) {
    return (
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
    );
  }

  return (
    <>
      <ul className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repositories.map((e) => {
          return (
            <li key={e.html_url} className="flex">
              <RepositoryCard repository={e} />
            </li>
          );
        })}
      </ul>
      <a
        href="https://github.com/TioElvis?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "link" })}>
        View all on GitHub <IconArrowUpRight aria-hidden />
      </a>
    </>
  );
}

function RepositoriesSkeleton() {
  return (
    <ul
      aria-label="Loading projects"
      className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: PER_PAGE }, (_, index) => (
        <li
          key={index}
          className="h-64 animate-pulse rounded-xl bg-background-code ring-1 ring-foreground/10"
        />
      ))}
    </ul>
  );
}
