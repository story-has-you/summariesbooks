import { listMessage } from "@/service/openai";
import { fail, ok } from "@/utils/api";
import { headers } from "next/headers";

export async function POST(request) {
  const { thread_id } = await request.json();
  const headersList = headers();
  const openai_key = headersList.get("openai-key");
  const messages = await listMessage(openai_key, thread_id);
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
