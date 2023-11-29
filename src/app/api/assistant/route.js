import { createMessage, run } from "@/service/openai";

export async function POST(request) {
  const { text, thread_id, assistant_id } = await request.json();
  await createMessage(thread_id, text);
  const { id } = await run(thread_id, assistant_id);
  return Response.json({ data: { run_id: id, thread_id: thread_id } });
}
