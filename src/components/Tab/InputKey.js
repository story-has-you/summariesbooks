import React, { useState } from "react";
import ChatContainer from "../ChatWithBook/ChatContainer";
import { fetchAPI } from "@/utils/api";
import { encrypt } from "@/utils/crypto";
import { getCurrentUser } from "@/utils/util";

export default ({ messages, user_id }) => {
  const [openaiKey, setOpenaiKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 处理 OpenAI Key 提交逻辑
    const { ok } = await fetchAPI("/api/auth/user", {
      method: "PUT",
      body: {
        id: user_id,
        openai_key: encrypt(openaiKey),
      },
    });
    if (ok) {
      await getCurrentUser();
    }
  };

  return (
    <>
      <div className="flex flex-col h-[75vh] md:h-[750px] border border-gray-300 rounded-lg">
        <div className="flex-grow overflow-auto p-4 relative">
          <ChatContainer messages={messages} sending={false} />
          {/* 高斯模糊背景 */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />

          {/* 输入框和按钮居中 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <form
              className="flex items-center p-4 bg-white shadow-md rounded-lg w-3/4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="input input-bordered flex-1 mr-4"
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                placeholder="Input your openai key, We will store it encrypted"
              />
              <button type="submit" className="btn btn-neutral">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
