"use client";

import ChatBox from "../ChatWithBook";
import Link from "next/link";
import InputKey from "./InputKey";
import NeedSignIn from "./NeedSignIn";
import { request } from "@/utils/api";
import { talkAi } from "@/utils/openai";
import { getCurrentUser, now } from "@/utils/util";
import { useEffect, useState } from "react";

const Tab = ({ book, assistant }) => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([
    {
      sender: `${book.book_name}`, // 或实际的发送者名字
      text: `Hi, you can ask me all your questions about ${book.book_name}`,
      time: now(),
      isReceived: true,
    },
  ]);
  const [activeTab, setActiveTab] = useState("summary");
  const [initChating, setInitChating] = useState(true);

  const isChatActive = activeTab === "chat";
  const isChatDisabled = user && initChating;
  const chatTabClass = `tab tab-bordered ${
    isChatActive ? "bg-neutral text-white" : ""
  } ${isChatDisabled ? "cursor-not-allowed opacity-50" : ""}`;

  const showChat = () => {
    if (user && user.openai_key) {
      return (
        <div className="mt-5">
          <ChatBox
            book={book}
            assistant={assistant}
            messages={messages}
            setMessages={setMessages}
            initChating={initChating}
          ></ChatBox>
        </div>
      );
    } else if (user && !user.openai_key) {
      return (
        <div className="mt-5">
          <InputKey messages={messages} userId={user.id} />
        </div>
      );
    }
    return <NeedSignIn messages={messages} />;
  };

  const handleChatClick = () => {
    if (!isChatDisabled) {
      setActiveTab("chat");
    }
  };

  const fetchCurrentUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
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
      return false;
    }
    const { openai_key } = user;
    if (!openai_key) {
      setInitChating(false);
      return false;
    }
    return true;
  };

  const initAi = async () => {
    if (!(await checkUserStatus())) {
      return;
    }
    setInitChating(true);
    try {
      await createThread();
      const text = `Please parse the uploaded file and answer the question in the language of the questioner.`;
      const thread_id = window.localStorage.getItem(`thread_id_${book.id}`);
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
      window.localStorage.setItem(`thread_id_${book.id}`, data);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
    initAi();
    return () => deleteThread();
  }, []);

  return (
    <div>
      <div className="tabs tabs-boxed custom-orange-100">
        <a
          className={`tab tab-bordered ${
            activeTab === "summary" ? "bg-neutral text-white" : ""
          }`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </a>

        <a
          className={chatTabClass}
          onClick={handleChatClick}
          style={{ pointerEvents: isChatDisabled ? "none" : "auto" }}
        >
          {user
            ? initChating
              ? "Chat With Book Initializing..."
              : "Chat With Book"
            : "Chat With Book"}
        </a>

        {/* <a
          className={`tab tab-bordered ${activeTab === "chat" ? "bg-neutral text-white" : ""
            }`}
          onClick={() => setActiveTab("chat")}
        >
          Chat With Book
        </a> */}
      </div>

      <div>
        {activeTab === "summary" && (
          <>
            <div className="flex justify-center px-4 py-16 custom-orange-100 mt-5 rounded-lg ">
              <p className="font-sans text-lg">{book.summary}</p>
            </div>
            <p>
              Not happy with the result?
              <Link
                href="https://docs.google.com/forms/d/1o60-PoKLnxcnwK5TgXnigrvfzyZje4rDq3QwhgLQsZU"
                target="_blank"
                className="italic underline"
              >
                Let us know what you think.
              </Link>
            </p>
          </>
        )}

        {activeTab === "chat" && showChat()}
      </div>
    </div>
  );
};

export default Tab;
