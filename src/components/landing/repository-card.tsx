import { IconStar } from "@tabler/icons-react";

import { getAllRepositories } from "@/lib/octokit";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

type Repository = Awaited<ReturnType<typeof getAllRepositories>>[number];

interface Props {
  repository: Repository;
}

// GitHub's own language colours, so they read the same as on the repository page
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS: "#663399",
  HTML: "#e34c26",
  Python: "#3572a5",
  Shell: "#89e051",
  C: "#555555",
  "C++": "#f34b7d",
  Go: "#00add8",
  Rust: "#dea584",
  Java: "#b07219",
  PLpgSQL: "#336790",
  Dockerfile: "#384d54",
};

const FALLBACK_COLOR = "var(--text-muted)";

const updatedFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

function languageShares(languages: Record<string, number>) {
  const total = Object.values(languages).reduce((sum, e) => sum + e, 0);
  if (total === 0) return [];

  const sorted = Object.entries(languages).sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 3);
  const rest = sorted.slice(3).reduce((sum, [, bytes]) => sum + bytes, 0);

  const shares = top.map(([name, bytes]) => ({
    name,
    percent: (bytes / total) * 100,
    color: LANGUAGE_COLORS[name] ?? FALLBACK_COLOR,
  }));

  if (rest > 0) {
    shares.push({
      name: "Other",
      percent: (rest / total) * 100,
      color: FALLBACK_COLOR,
    });
  }

  return shares;
}

export function RepositoryCard({ repository }: Props) {
  const shares = languageShares(repository.languages);
  const updatedAt = repository.pushed_at ?? repository.updated_at;
  const topics = repository.topics?.slice(0, 4) ?? [];

  return (
    <Card className="w-full">
      <CardHeader>
        <h3 className="text-base font-bold break-words">{repository.name}</h3>
        {repository.description && (
          <p className="text-muted-foreground">{repository.description}</p>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {topics.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full bg-primary-muted px-2 py-0.5 text-xs text-primary-base">
                {topic}
              </li>
            ))}
          </ul>
        )}
        {shares.length > 0 && (
          <div className="mt-auto flex flex-col gap-2">
            <div
              aria-hidden
              className="flex h-2 gap-0.5 overflow-hidden rounded-full">
              {shares.map((e) => (
                <span
                  key={e.name}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                  style={{ width: `${e.percent}%`, backgroundColor: e.color }}
                />
              ))}
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
              {shares.map((e) => (
                <li key={e.name} className="flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="size-2 rounded-full"
                    style={{ backgroundColor: e.color }}
                  />
                  <span className="text-foreground">{e.name}</span>
                  {Math.round(e.percent)}%
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <IconStar aria-hidden className="size-3.5" />
            {repository.stargazers_count}
            <span className="sr-only">stars</span>
          </span>
          {updatedAt && (
            <span>
              Updated{" "}
              <time dateTime={updatedAt}>
                {updatedFormat.format(new Date(updatedAt))}
              </time>
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2 justify-end">
        {repository.homepage && (
          <a
            href={repository.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}>
            View demo
          </a>
        )}
        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${repository.name} on GitHub`}
          className={buttonVariants()}>
          Github
        </a>
      </CardFooter>
    </Card>
  );
}
