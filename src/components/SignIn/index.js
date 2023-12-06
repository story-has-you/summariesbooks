import { fetchAPI } from "@/utils/api";
import React, { useRef, useState } from "react";
import Alert from "../Alert";
import { useRouter } from "next/navigation";
import SignImage from "../SignImage";
import Link from "next/link";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const alertRef = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required");
      alertRef.current.showToast();
      return;
    }
    // 在这里添加您的登录逻辑
    const { data, ok, message } = await fetchAPI("/api/auth/signin", {
      method: "POST",
      body: { email, password },
    });
    if (!ok) {
      setError(message);
      alertRef.current.showToast();
      return;
    }
    router.push("/");
  };

  const SignInForm = () => {
    return (
      <>
        {/* 登录表单部分 */}
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          {/* 网页标题 */}
          <h1 className="text-4xl font-bold mb-8">Book Summarize</h1>

          <div className="w-full max-w-md">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* 邮箱输入 */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* 密码输入 */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* 登录按钮 */}
                  <div className="form-control mt-4">
                    <button type="submit" className="btn btn-neutral">
                      Login
                    </button>
                  </div>
                </form>

                {/* 注册提示 */}
                <div className="text-center mt-4">
                  <span>Don't have an account? </span>
                  <Link href="/signup" className="link link-primary">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Alert ref={alertRef} message={error} />
      </>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SignImage></SignImage>
      {SignInForm()}
    </div>
  );
};
