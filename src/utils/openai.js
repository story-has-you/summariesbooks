import OpenAI from "openai";
import fetchAPI from "./api";

export const createOpenAI = () => {
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

export const talkAi = async (text, assistant, callback) => {
  const thread_id = window.localStorage.getItem(
    `thread_id_${assistant.book_id}`
  );
  if (!thread_id) {
    return;
  }
  const { data } = await fetchAPI("/api/assistant", {
    method: "POST",
    body: {
      assistant_id: assistant.assistant_id,
      thread_id: thread_id,
      text: text,
    },
  });
  loopStatus(data.thread_id, data.run_id, callback);
};

const loopStatus = (thread_id, run_id, callback) => {
  const timer = setInterval(async () => {
    const status = await fatchRetrieveRun(thread_id, run_id);
    if (status == "completed") {
      clearInterval(timer);
      const value = await fatchMessages(thread_id);
      if (callback) {
        callback(value);
      }
    }
  }, 3000);
};

const fatchRetrieveRun = async (thread_id, run_id) => {
  try {
    const { data } = await fetchAPI("/api/assistant/retrieve_run", {
      method: "POST",
      body: { thread_id, run_id },
    });
    return data;
  } catch (error) {
    console.error("Error retrieving run:", error);
  }
  return "fail";
};

const fatchMessages = async (thread_id) => {
  const { data } = await fetchAPI("/api/assistant/message", {
    method: "POST",
    body: { thread_id },
  });

  return data;
};