import { listMessage } from "@/service/openai";
import { fail, ok } from "@/utils/api";

export async function POST(request) {
  const { thread_id } = await request.json();
  const messages = await listMessage(thread_id);
  if (!messages) {
    return fail();
  }

  const last = messages.data.find((message) => message.role == "assistant");
  if (last) {
    const value = last.content.map((item) => item.text.value).join();
    return ok(value);
  }
  return fail();
}
