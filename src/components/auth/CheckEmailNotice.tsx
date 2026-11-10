"use client";

interface CheckEmailNoticeProps {
  email: string;
  onResend: () => Promise<void> | void;
  onBack: () => void;
  loading: boolean;
  error?: string;
}

export default function CheckEmailNotice({
  email,
  onResend,
  onBack,
  loading,
  error,
}: CheckEmailNoticeProps) {
  return (
    <div className="signin-banner-from-wrap text-center">
      <div className="signin-banner-title-box">
        <h4 className="signin-banner-from-title">Check your email</h4>
      </div>
      <p className="mb-20">
        <small>
          We sent a password reset link to <strong>{email}</strong>. Open it to
          set your password, then return here to sign in.
        </small>
      </p>
      {error && (
        <small style={{ color: "red", display: "block" }} className="mb-20">
          {error}
        </small>
      )}
      <div className="signin-banner-from-btn mb-20">
        <button
          type="button"
          className="signin-btn w-full"
          disabled={loading}
          onClick={onResend}
        >
          {loading ? "Sending…" : "Resend link"}
        </button>
      </div>
      <button type="button" className="btn btn-link p-0" onClick={onBack}>
        <small>Back to sign in</small>
      </button>
    </div>
  );
}
