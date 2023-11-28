import { insert } from "@/app/models/BookSummary"

export async function POST(request) {
  const requestBody = await request.json()

  const status = await insert(requestBody)
  if (status == 201) {
    return Response.json({ data: "Created" })
  }
  return Response.json({ data: "Fail" })
}
