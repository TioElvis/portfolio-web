import Link from "next/link";
import { getAllRepositories } from "@/lib/octokit";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Repository = Awaited<ReturnType<typeof getAllRepositories>>[number];

interface Props {
  repository: Repository;
}

export function RepositoryCard({ repository }: Props) {
  console.log(repository);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{repository.name}</CardTitle>
        <CardDescription>{repository.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-primary text-xs">{repository.language}</span>
      </CardContent>
      <CardFooter className="gap-4 justify-end">
        {repository.homepage && (
          <Button
            nativeButton={false}
            variant="outline"
            render={
              <Link href={repository.homepage} target="_blank">
                View demo
              </Link>
            }
          />
        )}
        <Button
          nativeButton={false}
          render={
            <Link href={repository.html_url} target="_blank">
              Github
            </Link>
          }
        />
      </CardFooter>
    </Card>
  );
}
