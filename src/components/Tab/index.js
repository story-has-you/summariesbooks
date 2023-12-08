import React, { useEffect, useState } from "react";
import ChatBox from "../ChatWithBook";
import Link from "next/link";
import { getCurrentUser } from "@/utils/util";
import InputKey from "./InputKey";
import NeedSignIn from "./NeedSignIn";

const now = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Tab = ({ book, assistant, initChating }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: `${book.book_name}`, // 或实际的发送者名字
      text: `Hi, you can ask me all your questions about ${book.book_name}`,
      time: now(),
      isReceived: true,
    },
  ]);
  const [activeTab, setActiveTab] = useState("summary");

  const isChatActive = activeTab === "chat";
  const isChatDisabled = user && initChating;
  const chatTabClass = `tab tab-bordered ${isChatActive ? "bg-neutral text-white" : ""} ${isChatDisabled ? "cursor-not-allowed opacity-50" : ""}`;

  const showChat = () => {
    if (user && user.openai_key) {
      return (
        <div className="mt-5">
          <ChatBox
            book={book}
            assistant={assistant}
            messages={messages}
            setMessages={setMessages}
            now={now}
            initChating={initChating}
          ></ChatBox>
        </div>
      );
    } else if (user && !user.openai_key) {
      return (
        <div className="mt-5">
          <InputKey
            messages={messages}
            user_id={user.id}
          />
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

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div>
      <div className="tabs tabs-boxed custom-orange-100">
        <a
          className={`tab tab-bordered ${activeTab === "summary" ? "bg-neutral text-white" : ""}`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </a>

        <a
          className={chatTabClass}
          onClick={handleChatClick}
          style={{ pointerEvents: isChatDisabled ? 'none' : 'auto' }}
        >
          {user ? (initChating ? "Chat With Book Initializing..." : "Chat With Book") : "Chat With Book"}
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
