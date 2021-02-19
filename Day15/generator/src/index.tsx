import fetch from "node-fetch";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// async await
// async awai selalu return promise
async function getUserRepos(userId: string) {
  await sleep(200);
  const url = `https://api.github.com/users/${userId}/repos`;
  // const repos = await fetch(url).then((response) => response.json());
  const response = await fetch(url);
  const repos = await response.json();
  await sleep(300);
  return repos.map((repo: { name: string }) => repo.name);
}

const result = getUserRepos("IndraSujadi");

console.log(result);

result.then((data) => console.log(data));
