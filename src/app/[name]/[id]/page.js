"use client";

import Book from "@/components/Book";
import { request } from "@/utils/api";
import { talkAi } from "@/utils/openai";
import { getCurrentUser } from "@/utils/util";
import { useEffect, useState } from "react";

export default ({ params }) => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [assistant, setAssistant] = useState({});
  const [initChating, setInitChating] = useState(true);

  const fetchBook = async () => {
    setLoading(true);
    try {
      const { data } = await request(`/api/book/${params.id}`);
      setBook(data);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
    setLoading(false);
  };

  const deleteThread = () => {
    const thread_id = window.localStorage.getItem(`thread_id_${book.id}`);
    if (!thread_id) {
      return;
    }
    try {
      request(`/api/thread/${thread_id}`, { method: "DELETE" });
      window.localStorage.removeItem(`thread_id_${book.id}`);
    } catch (error) {
      console.error("Error deleting thread:", error);
    }
  };

  const checkUserStatus = async () => {
    const user = await getCurrentUser();
    if (!user) {
      return false
    }
    const { openai_key } = user;
    if (!openai_key) {
      setInitChating(false);
      return false
    }
    return true
  }

  const initAi = async () => {
    if (!await checkUserStatus()) {
      console.log("user not login");
      return;
    }
    setInitChating(true);
    try {
      const { data } = await request(`/api/assistant/${params.id}`);
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
      talkAi(text, data, (value) => {
        setInitChating(false);
      });
    } catch (error) {
      console.error("Error fetching assistant:", error);
      setInitChating(false);
    }
  };

  const createThread = async () => {
    try {
      const { data } = await request("/api/thread", { method: "POST" });
      window.localStorage.setItem(`thread_id_${params.id}`, data);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  useEffect(() => {
    fetchBook();
    initAi();
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
