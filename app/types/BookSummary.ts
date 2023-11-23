export interface BookSummary {
  id: string;
  book_name: string;
  book_author: string;
  publish_date: string;
  summary: string;
  create_time: Date;
  update_time: Date;
  cover_url: string;
  gutenberg_url: string;
  category: Array<string>;
  amazon_url: string;
  markdown: string;
}
