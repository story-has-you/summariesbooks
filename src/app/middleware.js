import { createClient } from "@/utils/supabase/middleware";
import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    console.log(request.nextUrl.pathname);
    if (request.nextUrl.pathname.startsWith('/auth')) {
      const { supabase, response } = createClient(request);
      const session = await supabase.auth.getSession();
      console.log(session);
      return response;
    }
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
}

export const config = {
  matcher: '/auth/:path*',
}
