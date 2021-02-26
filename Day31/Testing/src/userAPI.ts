import { resolvePlugin } from "@babel/core";

type Article = {
  id: string;
  title: string;
  content: string;
};

const BASE_URL = "/api/v1";
// nox_adb.exe connect 127.0.0.1:62001

export function createGetArticles(fetch: Function) {
  async function getArticles(userID: string): Promise<Array<Article>> {
    let response = await fetch(`${BASE_URL}/users/${userID}/articles`);
    //   response.status === 200 sama dengan response.ok
    if (!response.ok) {
      throw new Error("Invalid Response Status");
    }
    let contentTypeRaw = response.headers.get("Content-Type") || "";
    let contentType = contentTypeRaw.split(";")[0].toLowerCase();
    //   Content-Type bisa jadi bentuknya seperti ini
    // Content-Type : application/json; charser:utf-8
    if (contentType !== "application/json") {
      throw Error("Invalid Content Type");
    }
    let data = await response.json();
    let articles: Array<unknown> = Array.isArray(data.articles)
      ? data.articles
      : [];

    return articles.map((item) => {
      // let article: Object = typeof item === "object" && item != null ? item : {};
      let article: any = ensureObject(item) || {};
      return {
        id: String(article.id),
        title: String(article.title),
        content: String(article.content),
      };
    });
  }
  return getArticles;
}

export default createGetArticles(global.fetch);

function ensureObject(item: unknown): Object | null | undefined {
  return typeof item === "object" && item !== null ? item : null;
  // return item !== null && typeof item === "object" ? item : null;
}
