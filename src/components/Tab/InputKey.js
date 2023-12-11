import React, { useState } from "react";
import ChatContainer from "../ChatWithBook/ChatContainer";
import { request } from "@/utils/api";
import { encrypt } from "@/utils/crypto";
import Cookies from "js-cookie";

export default ({ messages, userId }) => {
  const [openaiKey, setOpenaiKey] = useState("");
  const [isValidKey, setIsValidKey] = useState(true);

  const handleKeyChange = (e) => {
    const key = e.target.value;
    const keyRegex = /^sk-[a-zA-Z0-9]+$/;

    setIsValidKey(key === '' || keyRegex.test(key));
    setOpenaiKey(key);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 处理 OpenAI Key 提交逻辑
    const { ok } = await request("/api/auth/user", {
      method: "PUT",
      body: {
        id: userId,
        openai_key: encrypt(openaiKey),
      },
    });
    if (ok) {
      window.location.reload();
      Cookies.remove("current_user");
    }
  };

  return (
    <>
      <div className="flex flex-col h-[70vh] md:h-[700px] border border-gray-300 rounded-lg">
        <div className="flex-grow overflow-auto p-4 relative">
          <ChatContainer messages={messages} sending={false} />
          {/* 高斯模糊背景 */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />
          {/* 输入框和按钮居中 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <form
              className="flex items-center p-4 bg-orange-50 shadow-md rounded-lg w-3/4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className={`input input-bordered bg-orange-50 flex-1 mr-4 ${!isValidKey ? 'input-error' : ''}`}
                value={openaiKey}
                onChange={handleKeyChange}
                placeholder="Input your openai key, We will store it encrypted"
              />
              <button type="submit" className={`btn btn-neutral ${!isValidKey ? "btn-disabled" : ""}`} disabled={!isValidKey}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
