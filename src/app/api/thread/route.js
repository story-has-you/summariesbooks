import { createThread, deleteThread } from "@/service/openai";
import { ok } from "@/utils/api";
import { headers } from "next/headers";

export async function POST() {
  const headersList = headers();
  const openai_key = headersList.get("openai-key");
  const { id } = await createThread(openai_key);
  return ok(id);
}
