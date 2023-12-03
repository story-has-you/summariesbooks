create table
  book_summary (
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

create table
  book_assistant_relation (
    assistant_id text null,
    id uuid not null default gen_random_uuid (),
    file_id text null,
    book_id text null,
    constraint book_assistant_relation_pkey primary key (id),
    constraint book_assistant_relation_book_id_key unique (book_id)
  ) tablespace pg_default;

create table users (
    id uuid not null references auth.users on delete cascade,
    email character varying(255) not null,
    username character varying(50) not null,
    registration_date timestamp with time zone not null default current_timestamp,
    openai_key character varying(255) null,
    constraint users_pkey primary key (id),
    constraint users_email_key unique (email)
  ) tablespace pg_default;
