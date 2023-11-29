import { retrieveRun } from "@/service/openai";

export async function POST(request) {
  const { thread_id, run_id } = await request.json();
  const { status } = await retrieveRun(thread_id, run_id);
  return Response.json({ data: status });
}
