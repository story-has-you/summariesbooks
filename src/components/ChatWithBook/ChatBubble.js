import React from "react"

const ChatBubble = ({ message }) => {
    const { sender, text, time, isReceived } = message

    return (
        <div className={`chat ${isReceived ? "chat-start" : "chat-end"}`}>
            <div className="chat-header">
                {sender}
                <time className="text-xs opacity-50 ml-1">{time}</time>
            </div>
            <div className="chat-bubble">{text}</div>
        </div>
    )
}

export default ChatBubble
