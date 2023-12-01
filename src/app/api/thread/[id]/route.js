import { deleteThread } from "@/service/openai";
import { ok } from "@/utils/api";

export async function DELETE(request, context) {
  const { params } = context;
  await deleteThread(params.id);
  return ok("success");
}
