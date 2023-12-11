"use client";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/utils/util";
import Cookies from "js-cookie";
import Link from "next/link";
import { request } from "@/utils/api";
import { decrypt, encrypt } from "@/utils/crypto";

export default () => {
  const [user, setUser] = useState(null);
  const [openaiKey, setOpenaiKey] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValidKey, setIsValidKey] = useState(true);

  const handleKeyChange = (e) => {
    const key = e.target.value;
    const keyRegex = /^sk-[a-zA-Z0-9]+$/;
    setIsValidKey(key === '' || keyRegex.test(key));
    setOpenaiKey(key);
  };
  const fetchCurrentUser = async () => {
    const user = await getCurrentUser();
    if (!user) {
      return;
    }
    setUser(user);
    Cookies.set("current_user", JSON.stringify(user));
    if (!user.openai_key) {
      return;
    }
    Cookies.set("openai_key", user.openai_key);
    setOpenaiKey(decrypt(user.openai_key));
  };

  const onLogout = async () => {
    const { ok } = await request("/api/auth/signout", {
      method: "POST",
    });
    if (ok) {
      setUser(null);
      Cookies.remove("openai_key");
      Cookies.remove("current_user");
    }
  }

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleSubmit = async () => {
    toggleModal();
    const { ok } = await request("/api/auth/user", {
      method: "PUT",
      body: {
        id: user.id,
        openai_key: encrypt(openaiKey),
      },
    });
    if (ok) {
      Cookies.remove("current_user");
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <>
      <div className="ml-5">
        {user ? (
          <div className="avatar online placeholder dropdown dropdown-hover">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <span className="text-xl">{user.username.length > 2 ? user.username.substring(0, 2) : user.username}</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow custom-orange-50 rounded-box w-40">
              <li>
                <a href="#" className="justify-between" onClick={onLogout}>
                  Sign Out
                </a>
              </li>
              <li>
                <a href="#" className="justify-between" onClick={toggleModal}>
                  OpenAi Key
                </a>
              </li>
            </ul>
          </div>
        ) : (
          // 用户未登录，显示登录链接
          <Link href="/signin" className="btn btn-neutral btn-sm" target="_blank">
            Login
          </Link>
        )}
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-1/2 max-w-2xl custom-orange-50">
            <h3 className="font-bold text-lg">Enter OpenAI Key</h3>
            <input
              type="text"
              placeholder="Input your openai key, We will store it encrypted"
              className={`input input-bordered w-full mt-4 bg-orange-50 ${!isValidKey ? 'input-error' : ''}`}
              value={openaiKey}
              onChange={handleKeyChange}
            />
            {!isValidKey && <p className="text-red-500 text-xs mt-1">Invalid OpenAI Key format.</p>}
            <div className="modal-action">
              <button className={`btn btn-neutral ${!isValidKey ? "btn-disabled" : ""}`} onClick={handleSubmit} disabled={!isValidKey}>
                Submit
              </button>
              <button className="btn custom-orange-50" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};
