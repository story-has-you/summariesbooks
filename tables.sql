create table
  public.book_summary (
    id uuid not null default gen_random_uuid (),
    book_name character varying null default ''::character varying,
    book_author character varying null default ''::character varying,
    publish_date character varying null default ''::character varying,
    summary text null,
    create_time timestamp with time zone null default now(),
    update_time timestamp with time zone null default now(),
    cover_url text null,
    gutenberg_url text null,
    category json null,
    amazon_url text null,
    markdown text null,
    constraint book_review_pkey primary key (id)
  ) tablespace pg_default;

create index if not exists idx_book_name on public.book_summary using btree (book_name) tablespace pg_default;