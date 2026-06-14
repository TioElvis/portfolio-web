"use server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

interface GetAllRepositoriesProps {
  per_page: number;
}

export async function getAllRepositories(props: GetAllRepositoriesProps) {
  const { data } = await octokit.repos.listForUser({
    username: process.env.GITHUB_USERNAME!,
    visibility: "public",
    affiliation: "owner,collaborator,organization_member",
    per_page: props.per_page,
    sort: "updated",
  });

  const repositories = await Promise.all(
    data.map(async (repo) => {
      const { data: languages } = await octokit.repos.listLanguages({
        owner: process.env.GITHUB_USERNAME!,
        repo: repo.name,
      });

      return {
        ...repo,
        languages,
      };
    }),
  );

  return repositories;
}
