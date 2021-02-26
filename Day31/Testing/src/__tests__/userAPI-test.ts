import { createGetArticles } from "../userAPI";

type Headers = {
  get: (headerName: string) => string | null;
};

type HeadersObject = { [key: string]: string };

type Response = {
  ok: boolean;
  status: number;
  headers: Headers;
  json: () => Promise<unknown>;
};

function createHeaders(headers: HeadersObject) {
  return {
    get: (headerName: string) => headers[headerName],
  };
}

function createMockFetch(
  status: number,
  headers: HeadersObject,
  data: unknown
) {
  let response = {
    ok: status === 200,
    status: status,
    headers: createHeaders(headers),
    json: () => Promise.resolve(data),
  };
  let fetch = (url: string) => Promise.resolve(response);
  return fetch;
}

it("should build the correctly fetch", async () => {
  let mockFetch = jest.fn(
    createMockFetch(
      200,
      { "Content-Type": "application/json; charset=bruh" },
      { articles: [] }
    )
  );
  let getArticles = createGetArticles(mockFetch);
  let result = await getArticles("543");
  expect(result).toEqual([]);
  expect(mockFetch).toBeCalledWith("/api/v1/users/543/articles");
});

it("should throw an error if result != ok", async () => {
  let mockFetch = createMockFetch(404, { "Content-Type": "text/html" }, null);
  let getArticles = createGetArticles(mockFetch);
  let result;
  try {
    result = await getArticles("123");
  } catch (e) {
    expect(e.message).toEqual("Invalid Response Status");
  }
  expect(result).toEqual(undefined);
});

it("should throw an error if content-type is wrong", async () => {
  let mockFetch = createMockFetch(200, { "Content-Type": "text/html" }, null);
  let getArticles = createGetArticles(mockFetch);
  let result;
  try {
    result = await getArticles("123");
  } catch (e) {
    expect(e.message).toEqual("Invalid Content Type");
  }
  expect(result).toEqual(undefined);
});

it("should normalize /validate the data returned", async () => {
  let correctArticle = {
    id: "627",
    title: "How to be awesome",
    content: "You already know.",
  };
  let mockFetch = jest.fn(
    createMockFetch(
      200,
      { "Content-Type": "application/json; charset=bruh" },
      { articles: [null, false, "asdf", correctArticle] }
    )
  );
  let getArticles = createGetArticles(mockFetch);
  let result = await getArticles("543");
  expect(result).toEqual([
    {
      id: "undefined",
      title: "undefined",
      content: "undefined",
    },
    {
      id: "undefined",
      title: "undefined",
      content: "undefined",
    },
    {
      id: "undefined",
      title: "undefined",
      content: "undefined",
    },
    correctArticle,
  ]);
  expect(mockFetch).toBeCalledWith("/api/v1/users/543/articles");
});
