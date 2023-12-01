import { createClient } from "@/utils/supabase/middleware";

export async function middleware(request) {
  try {
    const { supabase, response } = createClient(request);
    await supabase.auth.getSession();
    return response;
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
}
