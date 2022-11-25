import React, { useState } from "react";
import User from "../services/user";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSubmit = async () => {
    const loginUser = {
      email,
      password,
    };
    let res = await User.sign_in(loginUser);
    localStorage.setItem("token", res.token);
    if(res.token){
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <div className="container">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo"></span>
                    <span className="app-brand-text demo text-body fw-bolder">
                      SafeTrees
                    </span>
                  </a>
                </div>
                <h4 className="mb-2">Welcome to SafeTrees!</h4>
                <p className="mb-4">
                  Please sign-in to your account and start the adventure
                </p>
                <div id="formAuthentication" className="mb-3">
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email-username"
                      placeholder="Enter your email or username"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" for="password">
                        Password
                      </label>
                      <a href="auth-forgot-password-basic.html">
                        <small>Forgot Password?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        aria-describedby="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-grid w-100"
                      onClick={onClickSubmit}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
                <p className="text-center">
                  <span>New on our platform?</span>
                  <a href="/">
                    <span>Create an account</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
