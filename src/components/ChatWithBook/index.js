import { useState } from "react";
import ChatBubble from "./ChatContainer";
import ChatContainer from "./ChatContainer";

const now = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const ChatBox = ({ book, assistant }) => {
  const [messages, setMessages] = useState([
    {
      sender: `${book.book_name}`, // 或实际的发送者名字
      text: `Hi, you can ask me all your questions about ${book.book_name}`,
      time: now(),
      isReceived: true,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    if (sending) {
      return;
    }
    if (!inputText.trim()) return;

    // 创建新消息对象
    const newMessage = {
      sender: "You", // 或实际的发送者名字
      text: inputText,
      time: now(),
      isReceived: false, // 假设所有新消息都是发送的
    };
    // 更新消息数组并清空输入框
    setMessages((current) => [...current, newMessage]);
    setInputText("");
    // 发送openai
    sendAi(newMessage.text, assistant);
  };

  const fatchRetrieveRun = async (thread_id, run_id) => {
    const res = await fetch("/api/assistant/retrieve_run", {
      method: "POST",
      body: JSON.stringify({ thread_id, run_id }),
    });
    if (res.ok) {
      const { data } = await res.json();
      return data;
    }
    return "Fail";
  };

  const fatchMessages = async (thread_id) => {
    const res = await fetch("/api/assistant/message", {
      method: "POST",
      body: JSON.stringify({ thread_id }),
    });
    if (res.ok) {
      const { data } = await res.json();
      return data;
    }
    return null;
  };

  const loopStatus = (thread_id, run_id) => {
    const timer = setInterval(async () => {
      const status = await fatchRetrieveRun(thread_id, run_id);
      if (status == "completed") {
        clearInterval(timer);
        const value = await fatchMessages(thread_id);
        // 创建新消息对象
        const newMessage = {
          sender: book.book_name, // 或实际的发送者名字
          text: value,
          time: now(),
          isReceived: true,
        };
        setMessages((current) => [...current, newMessage]);
        setSending(false);
      }
    }, 3000);
  };

  const sendAi = async (text, assistant) => {
    setSending(true);
    const thread_id = window.localStorage.getItem(`thread_id_${book.id}`);
    if (!thread_id) {
      return;
    }
    const res = await fetch("/api/assistant", {
      method: "POST",
      body: JSON.stringify({
        assistant_id: assistant.assistant_id,
        thread_id: thread_id,
        text: text,
      }),
    });

    if (res.ok) {
      const { data } = await res.json();
      loopStatus(data.thread_id, data.run_id);
    }
  };

  return (
    <div className="flex flex-col h-[85vh] md:h-[850px] border border-gray-300 rounded-lg">
      <div className="flex-grow overflow-auto p-4">
        <ChatContainer messages={messages} />
      </div>
      <div className="flex p-4 bg-gray-100">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // 防止默认行为（如表单提交）
              handleSend();
            }
          }}
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className={`btn btn-neutral ml-2 ${sending ? "btn-disabled" : ""}`}
          disabled={sending}
        >
          发送
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
