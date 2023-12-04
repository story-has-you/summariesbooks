import { createMessage, run } from "@/service/openai";
import { ok } from "@/utils/api";
import { headers } from "next/headers";

export async function POST(request) {
  const { text, thread_id, assistant_id } = await request.json();
  const headersList = headers();
  const openai_key = headersList.get("openai-key");
  await createMessage(openai_key, thread_id, text);
  const { id } = await run(openai_key, thread_id, assistant_id);
  return ok({ run_id: id, thread_id: thread_id });
}
