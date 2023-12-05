"use client";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/utils/util";
import Cookies from "js-cookie";
import Link from "next/link";
import { fetchAPI } from "@/utils/api";

export default () => {
  const [user, setUser] = useState(null);

  const fetchCurrentUser = async () => {
    const user = await getCurrentUser();
    if (!user) {
      return;
    }
    setUser(user);
    if (!user.openai_key) {
      return;
    }
    Cookies.set("openai_key", user.openai_key);
  };

  const onLogout = async () => {
    const { ok } = await fetchAPI("/api/auth/signout", {
      method: "POST",
    });
    if (ok) {
      setUser(null);
      Cookies.remove("openai_key");
    }
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <>
      <div className="ml-5">
        {user ? (
          <div className="avatar online placeholder dropdown dropdown-hover">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span className="text-xl">{user.username.length > 2 ? user.username.substring(0, 2) : user.username}</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="#" className="justify-between" onClick={onLogout}>
                  Sign Out
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
    </>
  );
};
