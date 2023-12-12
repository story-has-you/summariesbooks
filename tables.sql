create table
  public.book_assistant_relation (
    assistant_id text null,
    id uuid not null default gen_random_uuid (),
    file_id text null,
    book_id uuid null,
    constraint book_assistant_relation_pkey primary key (id),
    constraint book_assistant_relation_book_id_key unique (book_id),
    constraint book_assistant_relation_book_id_fkey foreign key (book_id) references book_summary (id) on delete cascade
  ) tablespace pg_default;

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
    category json null default '["Text"]'::json,
    amazon_url text null,
    constraint book_review_pkey primary key (id)
  ) tablespace pg_default;

create index if not exists idx_book_name on public.book_summary using btree (book_name) tablespace pg_default;

create unique index idx_unique_book_name on public.book_summary using btree (book_name) tablespace pg_default;

create table
  public.users (
    id uuid not null,
    email character varying(255) not null,
    username character varying(50) not null,
    registration_date timestamp with time zone not null default current_timestamp,
    openai_key text null,
    constraint users_pkey primary key (id),
    constraint users_email_key unique (email),
    constraint users_id_fkey foreign key (id) references auth.users (id) on delete cascade
  ) tablespace pg_default;
