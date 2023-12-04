import { retrieveRun } from "@/service/openai";
import { ok } from "@/utils/api";
import { headers } from "next/headers";

export async function POST(request) {
  const { thread_id, run_id } = await request.json();
  const headersList = headers();
  const openai_key = headersList.get("openai-key");
  const { status } = await retrieveRun(openai_key, thread_id, run_id);
  return ok(status);
}
