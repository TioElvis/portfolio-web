import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const USERNAME = process.env.GITHUB_USERNAME ?? "TioElvis";

interface GetAllRepositoriesProps {
  per_page: number;
}

export async function getAllRepositories(props: GetAllRepositoriesProps) {
  try {
    const { data } = await octokit.repos.listForUser({
      username: USERNAME,
      type: "owner",
      per_page: props.per_page,
      sort: "updated",
    });

    return await Promise.all(
      data.map(async (repo) => {
        const { data: languages } = await octokit.repos.listLanguages({
          owner: USERNAME,
          repo: repo.name,
        });

        return {
          ...repo,
          languages,
        };
      }),
    );
  } catch (error) {
    // A missing token or GitHub's rate limit must not take the page down
    console.error("Could not load repositories from GitHub", error);
    return [];
  }
}
