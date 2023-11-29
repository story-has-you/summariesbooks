import { useEffect, useRef } from "react";
import './ChatStyles.css';

const ChatContainer = ({ messages, sending }) => {
  const endOfMessagesRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      containerRef.current.scrollTo(0, scrollHeight - clientHeight);
    }

  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-y-auto h-full scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-300"
    >
      {messages.map((message, index) => (
        <ChatBubble key={index} message={message} />
      ))}
      {sending && <TypingIndicator />}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

const TypingIndicator = () => {
  return (
    <>
      <div className="flex items-center p-2">
        <div className="typing-dot bg-neutral"></div>
        <div className="typing-dot bg-neutral ml-1"></div>
        <div className="typing-dot bg-neutral ml-1"></div>
      </div>
    </>
  );

};


const ChatBubble = ({ message }) => {
  const { sender, text, time, isReceived } = message;

  return (
    <div className={`chat ${isReceived ? "chat-start" : "chat-end"}`}>
      <div className="chat-header">
        {sender}
        <time className="text-xs opacity-50 ml-1">{time}</time>
      </div>
      <div className="chat-bubble">{text}</div>
    </div>
  );
};

export default ChatContainer;
