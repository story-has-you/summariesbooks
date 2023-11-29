import { listMessage } from "@/service/openai";

export async function POST(request) {
  const { thread_id } = await request.json();
  const messages = await listMessage(thread_id);
  if (!messages) {
    return Response.json({ data: null });
  }

  const last = messages.data.find((message) => message.role == "assistant");
  if (last) {
    const value = last.content.map((item) => item.text.value).join();
    return Response.json({ data: value });
  }
  return Response.json({ data: null });
}
