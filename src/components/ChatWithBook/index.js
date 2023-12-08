import { useState } from "react";
import ChatContainer from "./ChatContainer";
import { talkAi } from "@/utils/openai";

const ChatBox = ({ book, assistant, messages, setMessages, now, initChating }) => {
  const [inputText, setInputText] = useState("");
  const [sending, setSending] = useState(initChating);

  const handleClear = () => {
    setMessages([]);
  };

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

  const sendAi = async (text, assistant) => {
    setSending(true);
    try {
      await talkAi(text, assistant, (value) => {
        // 创建新消息对象
        const newMessage = {
          sender: book.book_name, // 或实际的发送者名字
          text: value,
          time: now(),
          isReceived: true,
        };
        setMessages((current) => [...current, newMessage]);
        setSending(false);
      });
    } catch (error) {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] md:h-[700px] border bg-orange-50 rounded-lg">
      <div className="flex-grow overflow-auto p-4">
        <ChatContainer messages={messages} sending={sending} />
      </div>
      <div className="flex p-4 bg-orange-100">
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
          className="flex-grow p-2 border bg-orange-50 rounded mr-2"
          placeholder="Type a message and press Enter to send"
        />
        <button onClick={handleClear} className={`btn btn-neutral ml-2`}>
          清空
        </button>
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
