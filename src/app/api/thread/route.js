import { createThread, deleteThread } from "@/service/openai";
import { ok } from "@/utils/api";

export async function POST() {
  const { id } = await createThread();
  return ok(id);
}
