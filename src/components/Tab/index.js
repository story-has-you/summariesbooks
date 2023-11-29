import React, { useState } from "react"
import ChatBox from "../ChatWithBook"
import Link from "next/link"
import Mindmap from "../Mindmap"
import { useEffect } from "react";


const now = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Tab = ({ book, assistant }) => {
  const [messages, setMessages] = useState([
    {
      sender: `${book.book_name}`, // 或实际的发送者名字
      text: `Hi, you can ask me all your questions about ${book.book_name}`,
      time: now(),
      isReceived: true,
    },
  ]);

  const [activeTab, setActiveTab] = useState("summary")


  return (
    <div>
      <div className="tabs tabs-boxed">
        <a
          className={`tab tab-bordered ${activeTab === "summary" ? "bg-neutral text-white" : ""
            }`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </a>
        {/* <a
          className={`tab tab-bordered ${activeTab === "mindmap" ? "bg-neutral text-white" : ""
            }`}
          onClick={() => setActiveTab("mindmap")}
        >
          Mind Map
        </a> */}
        <a
          className={`tab tab-bordered ${activeTab === "chat" ? "bg-neutral text-white" : ""
            }`}
          onClick={() => setActiveTab("chat")}
        >
          Chat With Book
        </a>
      </div>

      <div>
        {activeTab === "summary" && (
          <>
            <div className="flex justify-center px-4 py-16 bg-base-200 mt-5 rounded-lg">
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

        {activeTab === "mindmap" && (
          <div className="mt-5">
            <Mindmap markdown={book.markdown}></Mindmap>
          </div>
        )}

        {activeTab === "chat" && (
          <div className="mt-5">
            <ChatBox book={book} assistant={assistant} messages={messages} setMessages={setMessages} now={now}></ChatBox>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab
