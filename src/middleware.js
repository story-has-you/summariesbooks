import { createClient } from "@/utils/supabase/middleware";
import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const { supabase } = createClient(request);
    const { data: { session } = {} } = await supabase.auth.getSession();
    const { user } = session;
    const openai_key = user.user_metadata.openai_key;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("openai-key", openai_key);
    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });
    return response;
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
}
