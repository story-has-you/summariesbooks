import React, { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在这里添加您的登录逻辑
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 登录表单部分 */}
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        {/* 网页标题 */}
        <h1 className="text-4xl font-bold mb-8">Book Summarize</h1>

        <div className="w-full max-w-md">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              {error && <div className="alert alert-error">{error}</div>}

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
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 图片部分 */}
      <div className="flex-1 hidden lg:block">
        <img
          src="login_bg.png"
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;
