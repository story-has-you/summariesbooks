"use client";

import Book from "@/components/Book";
import { useEffect, useState } from "react";

export default ({ params }) => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [assistant, setAssistant] = useState({});

  const fetchBook = async () => {
    setLoading(true);
    const res = await fetch(`/api/book/${params.id}`);
    if (res) {
      const { data } = await res.json();
      setBook(data);
    }
    setLoading(false);
  };

  const deleteThread = async () => {
    const thread_id = window.localStorage.getItem(`thread_id_${book.id}`);
    if (!thread_id) {
      return;
    }
    const res = await fetch(`/api/thread/${thread_id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      window.localStorage.removeItem(`thread_id_${book.id}`);
    }
  };

  const fetchAssistant = async () => {
    const res = await fetch(`/api/assistant/${params.id}`);
    if (res.ok) {
      const { data } = await res.json();
      if (!data) {
        return
      }
      setAssistant(data);
      await createThread()
      const text = `Please parse the uploaded file and answer the question in the language of the questioner.`
      fetchPostAssistant(text, data.assistant_id)
    }
  };


  const createThread = async () => {
    const res = await fetch("/api/thread", {
      method: "POST"
    })
    if (res.ok) {
      const { data } = await res.json()
      window.localStorage.setItem(`thread_id_${params.id}`, data)
    }
  }


  const fetchPostAssistant = async (text, assistant_id) => {
    const thread_id = window.localStorage.getItem(`thread_id_${params.id}`);
    if (!thread_id) {
      return;
    }
    return await fetch("/api/assistant", {
      method: "POST",
      body: JSON.stringify({
        assistant_id: assistant_id,
        thread_id: thread_id,
        text: text,
      }),
    });
  }


  useEffect(() => {
    fetchBook();
    fetchAssistant();
    return () => deleteThread()
  }, []);
  return (
    <>
      <Book book={book} loading={loading} assistant={assistant}></Book>
    </>
  );
};
