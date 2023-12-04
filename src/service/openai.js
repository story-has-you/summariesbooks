import { createOpenAI } from "@/utils/openai";

export const createThread = async (openai_key) => {
  const openai = createOpenAI(openai_key);
  return await openai.beta.threads.create();
};

export const deleteThread = async (openai_key, thread_id) => {
  const openai = createOpenAI(openai_key);
  return await openai.beta.threads.del(thread_id);
};

export const createMessage = async (openai_key, thread_id, content) => {
  const openai = createOpenAI(openai_key);
  return await openai.beta.threads.messages.create(thread_id, {
    role: "user",
    content: content,
  });
};

export const listMessage = async (openai_key, thread_id) => {
  const openai = createOpenAI(openai_key);
  return await openai.beta.threads.messages.list(thread_id);
};

export const run = async (openai_key, thread_id, assistant_id) => {
  const openai = createOpenAI(openai_key);
  return await openai.beta.threads.runs.create(thread_id, {
    assistant_id: assistant_id,
  });
};

export const createThreadAndRun = async (openai_key, assistant_id, content) => {
  const openai = createOpenAI(openai_key);
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

export const retrieveRun = async (openai_key, thread_id, run_id) => {
  const openai = createOpenAI(openai_key);
  return await openai.beta.threads.runs.retrieve(thread_id, run_id);
};
