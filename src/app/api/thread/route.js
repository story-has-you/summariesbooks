import { createThread, deleteThread } from "@/service/openai";

export async function POST() {
  const { id } = await createThread()
  return Response.json({ data: id })
}
