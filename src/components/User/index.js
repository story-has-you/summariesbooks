"use client";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/utils/util";
import Cookies from "js-cookie";

export default () => {
  const [user, setUser] = useState(null);

  const fetchCurrentUser = async () => {
    const user = await getCurrentUser();
    if (!user) {
      return;
    }
    setUser(user);
    const { openai_key } = user;
    if (!openai_key) {
      return;
    }
    Cookies.set("openai_key", openai_key);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <>
      {user && (
        <div className="ml-5 avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-8">
            <span className="text-xs">{user.username || "?"}</span>
          </div>
        </div>
      )}
    </>
  );
};
