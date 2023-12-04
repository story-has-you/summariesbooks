import { deleteThread } from "@/service/openai";
import { ok } from "@/utils/api";
import { headers } from "next/headers";

export async function DELETE(request, context) {
  const { params } = context;
  const headersList = headers();
  const openai_key = headersList.get("openai-key");
  await deleteThread(openai_key, params.id);
  return ok("success");
}
