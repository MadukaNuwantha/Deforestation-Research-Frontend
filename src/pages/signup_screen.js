import React, { useState } from "react";
import User from "../services/user";

export default function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSubmit = async () => {
    const newUser = {
      username,
      email,
      password,
    };
    let res = await User.sign_in(newUser);
    localStorage.setItem("token", res.token);
    alert("Registration Successful");
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <a href="index.html" class="app-brand-link gap-2">
                    <span class="app-brand-logo demo"></span>
                    <span class="app-brand-text demo text-body fw-bolder">
                      SafeTrees
                    </span>
                  </a>
                </div>
                <h4 class="mb-2">Adventure starts here</h4>
                <p class="mb-4">Make your app management easy and fun!</p>
                <div
                  id="formAuthentication"
                  class="mb-3"
                >
                  <div class="mb-3">
                    <label for="username" class="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      value={username}
                      placeholder="Enter your username"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Enter your email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <label class="form-label" for="password">
                      Password
                    </label>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <button class="btn btn-primary d-grid w-100" onClick={onClickSubmit}>Sign up</button>
                </div>
                <p class="text-center">
                  <span>Already have an account?</span>
                  <a href="auth-login-basic.html">
                    <span>Sign in instead</span>
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
