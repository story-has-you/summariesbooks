import { createClient } from "@supabase/supabase-js";

export const supabaseClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        fetch: (url, options) => fetch(url, { ...options, cache: "no-cache" }),
      },
    }
  );
