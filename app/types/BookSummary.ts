export interface BookSummary {
  id: String;
  book_name: String;
  book_author: String;
  publish_date: String;
  summary: String;
  create_time: Date;
  update_time: Date;
  cover_url: String;
  gutenberg_url: String;
  category: Array<String>;
}
