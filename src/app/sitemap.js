import { request } from "@/utils/api";

export default async function sitemap() {
  const { data } = await request("/api/books");
  const result = data.map((book) => ({
    url: `https://summariesbooks.com/${book.book_name.replace(/ /g, "-")}/${
      book.id
    }`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  result.unshift({
    url: "https://summariesbooks.com/",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  });
  return result;
}
