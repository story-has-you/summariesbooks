import { createOpenAI } from "@/utils/openai";

export const createThread = async () => {
  const openai = createOpenAI();
  return await openai.beta.threads.create();
};

export const deleteThread = async (thread_id) => {
  const openai = createOpenAI();
  return await openai.beta.threads.del(thread_id);
};

export const createMessage = async (thread_id, content) => {
  const openai = createOpenAI();
  return await openai.beta.threads.messages.create(thread_id, {
    role: "user",
    content: content,
  });
};
export const listMessage = async (thread_id) => {
  const openai = createOpenAI();
  return await openai.beta.threads.messages.list(thread_id);
};

export const run = async (thread_id, assistant_id) => {
  const openai = createOpenAI();
  return await openai.beta.threads.runs.create(thread_id, {
    assistant_id: assistant_id,
  });
};
export const createThreadAndRun = async (assistant_id, content) => {
  const openai = createOpenAI();
  return await openai.beta.threads.createAndRun({
    assistant_id: assistant_id,
    thread: {
      messages: [
        { role: "user", content: "Please analyze the uploaded file" },
        { role: "user", content: content },
      ],
    },
  });
};

export const retrieveRun = async (thread_id, run_id) => {
  const openai = createOpenAI();
  return await openai.beta.threads.runs.retrieve(thread_id, run_id);
};

export const talk = async (assistant_id, content, callback) => {
  const { id, thread_id } = await createThreadAndRun(assistant_id, content);
  const intervalId = setInterval(async () => {
    const { status } = await retrieveRun(thread_id, id);
    if (status === "completed") {
      clearInterval(intervalId);
      const messages = await listMessage(thread_id);
      const value = messages.data
        .filter((message) => message.role === "assistant")
        .map((message) => message.content.map((item) => item.text.value).join())
        .join();
      callback(value);
    }
  }, 3000);
};
