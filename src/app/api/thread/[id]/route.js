import { deleteThread } from "@/service/openai"

export async function DELETE(request, context) {
  const { params } = context
  await deleteThread(params.id)
  return Response.json({ data: "success" })
}
