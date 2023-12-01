import { retrieveRun } from "@/service/openai";
import { ok } from "@/utils/api";

export async function POST(request) {
  const { thread_id, run_id } = await request.json();
  const { status } = await retrieveRun(thread_id, run_id);
  return ok(status);
}
