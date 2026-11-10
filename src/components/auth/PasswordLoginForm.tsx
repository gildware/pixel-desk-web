"use client";

import { useState } from "react";

interface PasswordLoginFormProps {
  email: string;
  initialRememberMe?: boolean;
  onSubmit: (password: string, rememberMe: boolean) => Promise<void> | void;
  onForgotPassword: () => void;
  onUseOtp: () => Promise<void> | void;
  onChangeEmail: () => void;
  loading: boolean;
  error?: string;
}

export default function PasswordLoginForm({
  email,
  initialRememberMe = false,
  onSubmit,
  onForgotPassword,
  onUseOtp,
  onChangeEmail,
  loading,
  error,
}: PasswordLoginFormProps) {
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(initialRememberMe);

  return (
    <div className="signin-banner-from-wrap">
      <div className="signin-banner-title-box">
        <h4 className="signin-banner-from-title">Sign in with password</h4>
      </div>
      <div className="signin-banner-from-box">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!password) return;
            await onSubmit(password, rememberMe);
          }}
        >
          <div className="postbox__comment-input mb-20">
            <input type="email" className="inputText" value={email} readOnly />
            <span className="floating-label">Your Email</span>
            <button
              type="button"
              className="btn btn-link p-0 mt-1"
              onClick={onChangeEmail}
            >
              <small>Use a different email</small>
            </button>
          </div>
          <div className="postbox__comment-input mb-20">
            <input
              type="password"
              className="inputText"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <span className="floating-label">Password</span>
            {error && (
              <small style={{ color: "red", display: "block" }}>{error}</small>
            )}
          </div>
          <div className="form-check d-flex align-items-start gap-2 mb-20">
            <input
              className="form-check-input mt-1"
              type="checkbox"
              id="remember-password"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="remember-password">
              <small>Remember login on this device</small>
            </label>
          </div>
          <div className="signin-banner-from-btn mb-20">
            <button
              type="submit"
              className="signin-btn w-full"
              disabled={!password || loading}
              style={
                !password || loading
                  ? { cursor: "not-allowed", opacity: 0.6 }
                  : { cursor: "pointer" }
              }
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </div>
          <div className="d-flex flex-column gap-2">
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={onForgotPassword}
            >
              <small>Forgot password?</small>
            </button>
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={onUseOtp}
              disabled={loading}
            >
              <small>Use a one-time code instead</small>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
