"use client";

import Book from "@/components/Book";
import { fetchAPI } from "@/utils/api";
import { talkAi } from "@/utils/openai";
import { useEffect, useState } from "react";

export default ({ params }) => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [assistant, setAssistant] = useState({});
  const [initChating, setInitChating] = useState(true);

  const fetchBook = async () => {
    setLoading(true);
    try {
      const { data } = await fetchAPI(`/api/book/${params.id}`);
      setBook(data);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
    setLoading(false);
  };

  const deleteThread = async () => {
    const thread_id = window.localStorage.getItem(`thread_id_${book.id}`);
    if (!thread_id) {
      return;
    }
    try {
      await fetchAPI(`/api/thread/${thread_id}`, "DELETE");
      window.localStorage.removeItem(`thread_id_${book.id}`);
    } catch (error) {
      console.error("Error deleting thread:", error);
    }
  };

  const fetchAssistant = async () => {
    setInitChating(true);
    try {
      const { data } = await fetchAPI(`/api/assistant/${params.id}`);
      if (!data) {
        return;
      }
      setAssistant(data);
      await createThread();
      const text = `Please parse the uploaded file and answer the question in the language of the questioner.`;
      const thread_id = window.localStorage.getItem(`thread_id_${params.id}`);
      if (!thread_id) {
        return;
      }
      talkAi(text, data.assistant_id, thread_id, (value) => setInitChating(false));
    } catch (error) {
      console.error("Error fetching assistant:", error);
    }
  };

  const createThread = async () => {
    try {
      const { data } = await fetchAPI("/api/thread", { method: "POST" });
      window.localStorage.setItem(`thread_id_${params.id}`, data);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };


  useEffect(() => {
    fetchBook();
    fetchAssistant();
    return () => deleteThread();
  }, []);
  return (
    <>
      <Book
        book={book}
        loading={loading}
        assistant={assistant}
        initChating={initChating}
      ></Book>
    </>
  );
};
