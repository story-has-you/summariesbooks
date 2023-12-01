import { createMessage, run } from "@/service/openai";
import { ok } from "@/utils/api";

export async function POST(request) {
  const { text, thread_id, assistant_id } = await request.json();
  await createMessage(thread_id, text);
  const { id } = await run(thread_id, assistant_id);
  return ok({ run_id: id, thread_id: thread_id });
}
