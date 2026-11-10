"use client";

import { useState } from "react";

interface ForgotPasswordFormProps {
  initialEmail?: string;
  onSubmit: (email: string) => Promise<void> | void;
  onBack: () => void;
  loading: boolean;
  error?: string;
}

export default function ForgotPasswordForm({
  initialEmail = "",
  onSubmit,
  onBack,
  loading,
  error,
}: ForgotPasswordFormProps) {
  const [email, setEmail] = useState(initialEmail);
  const [touched, setTouched] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="signin-banner-from-wrap">
      <div className="signin-banner-title-box">
        <h4 className="signin-banner-from-title">Forgot password?</h4>
      </div>
      <div className="signin-banner-from-box">
        <p className="mb-20">
          <small>
            We&apos;ll email you a link to set a new password.
          </small>
        </p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setTouched(true);
            if (!isValidEmail) return;
            await onSubmit(email.trim().toLowerCase());
          }}
        >
          <div className="postbox__comment-input mb-20">
            <input
              type="email"
              className="inputText"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              required
            />
            <span className="floating-label">Your Email</span>
            {touched && !isValidEmail && (
              <small style={{ color: "red" }}>
                Please enter a valid email address
              </small>
            )}
            {error && (
              <small style={{ color: "red", display: "block" }}>{error}</small>
            )}
          </div>
          <div className="signin-banner-from-btn mb-20">
            <button
              type="submit"
              className="signin-btn w-full"
              disabled={!isValidEmail || loading}
              style={
                !isValidEmail || loading
                  ? { cursor: "not-allowed", opacity: 0.6 }
                  : { cursor: "pointer" }
              }
            >
              {loading ? "Sending…" : "Send reset link"}
            </button>
          </div>
          <button type="button" className="btn btn-link p-0" onClick={onBack}>
            <small>Back to sign in</small>
          </button>
        </form>
      </div>
    </div>
  );
}
