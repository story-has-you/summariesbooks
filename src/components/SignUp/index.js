import { request } from "@/utils/api";
import React, { useRef, useState } from "react";
import Alert from "../Alert";
import SignImage from "../SignImage";

export default () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const alertRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      setError("Email and Password are required");
      alertRef.current.showToast();
      return;
    }
    // 在这里添加您的登录逻辑
    const { data, ok, message } = await request("/api/auth/signup", {
      method: "POST",
      body: { email, password, username },
    });
    if (!ok) {
      setError(message);
      alertRef.current.showToast();
      return;
    }
    setRegistered(true);
  };

  const registerSuccess = () => {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Registration Successful!</h2>
              <p>
                Your account has been successfully created. A verification email
                has been sent to your email address.
              </p>
              <p>Please check your email to verify your account.</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <>
        {/* 登录表单部分 */}
        <div className="flex flex-1 flex-col items-center justify-center p-4 custom-orange-50">
          {/* 网页标题 */}
          <h1 className="text-4xl font-bold mb-8">Book Summarize</h1>

          <div className="w-full max-w-md">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                {/* 用户名 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
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
                      Register
                    </button>
                  </div>
                </form>
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
      {/* 图片部分 */}
      <SignImage></SignImage>

      {registered ? registerSuccess() : SignUpForm()}
    </div>
  );
};
