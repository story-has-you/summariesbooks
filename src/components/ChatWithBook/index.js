import { useState } from "react"
import ChatBubble from "./ChatBubble"

const now = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })
}

const ChatBox = ({ book, assistant }) => {
  const [messages, setMessages] = useState([
    {
      sender: `${book.book_name}`, // 或实际的发送者名字
      text: `Hi, you can ask me all your questions about ${book.book_name}`,
      time: now(),
      isReceived: true
    }
  ])
  const [inputText, setInputText] = useState("")

  const handleSend = () => {
    if (!inputText.trim()) return

    // 创建新消息对象
    const newMessage = {
      sender: "You", // 或实际的发送者名字
      text: inputText,
      time: now(),
      isReceived: false // 假设所有新消息都是发送的
    }
    // 更新消息数组并清空输入框
    setMessages([...messages, newMessage])
    setInputText("")

    // 发送openai

  }



  return (
    <div className="flex flex-col h-[70vh] md:h-[700px] border border-gray-300 rounded-lg">
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>
      <div className="flex p-4 bg-gray-100">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              // 检查是否按下回车键并且没有同时按下 Shift 键
              e.preventDefault() // 防止默认行为（如表单提交）
              handleSend()
            }
          }}
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="btn btn-neutral ml-2">
          发送
        </button>
      </div>
    </div>
  )
}

export default ChatBox
