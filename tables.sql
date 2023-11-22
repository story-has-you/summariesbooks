create table book_summary (
    id uuid not null default gen_random_uuid (),
    book_name character varying null default ''::character varying,
    book_author character varying null default ''::character varying,
    publish_date character varying null default ''::character varying,
    amazon_url text null,
    cover_url text null,
    summary text null,
    create_time timestamp with time zone null default now(),
    update_time timestamp with time zone null default now(),
    constraint book_review_pkey primary key (id)
  ) tablespace pg_default;


