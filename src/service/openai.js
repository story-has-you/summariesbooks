import { HttpsProxyAgent } from "https-proxy-agent";
import OpenAI from "openai";

const openai = () => {
  if (process.env == "dev" || process.env == "development") {
    return new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      httpAgent: new HttpsProxyAgent(process.env.NEXT_PUBLIC_HTTP_PROXY),
    });
  }
  return new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
};
export async function createThread() {
  return await openai.beta.threads.create();
}

export async function deleteThread(thread_id) {
  return await openai.beta.threads.del(thread_id);
}

export async function createMessage(thread_id, content) {
  return await openai.beta.threads.messages.create(thread_id, {
    role: "user",
    content: content,
  });
}

export async function listMessage(thread_id) {
  return await openai.beta.threads.messages.list(thread_id);
}

export async function run(thread_id, assistant_id) {
  return await openai.beta.threads.runs.create(thread_id, {
    assistant_id: assistant_id,
  });
}

export async function createThreadAndRun(assistant_id, content) {
  return await openai.beta.threads.createAndRun({
    assistant_id: assistant_id,
    thread: {
      messages: [
        { role: "user", content: "Please analyze the uploaded file" },
        { role: "user", content: content },
      ],
    },
  });
}

export async function retrieveRun(thread_id, run_id) {
  return await openai.beta.threads.runs.retrieve(thread_id, run_id);
}

export async function talk(assistant_id, content, callback) {
  const { id, thread_id } = await createThreadAndRun(assistant_id, content);
  let messages;
  const intervalId = setInterval(async () => {
    const { status } = await retrieveRun(thread_id, id);
    if (status == "completed") {
      clearInterval(intervalId);
      const messages = await listMessage(thread_id);
      const value = messages.data
        .filter((message) => message.role == "assistant")
        .map((message) => {
          return message.content.map((item) => item.text.value).join();
        })
        .join();
      callback(value);
    }
  }, 3000);
}
