"use client";

import { useState } from "react";

interface OtpVerificationProps {
  email: string;
  onVerify?: (otp: string) => Promise<void> | void;
  loading: boolean;
  error?: string;
}

export default function OtpVerification({
  email,
  onVerify,
  loading,
  error,
}: OtpVerificationProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [agreeOffers, setAgreeOffers] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const otpValue = otp.join("");
  const isOtpComplete = otp.every((d) => d.length === 1);
  const canSubmit = isOtpComplete && agreeOffers && agreeTerms && !loading;

  const submitOtp = async () => {
    if (!canSubmit) return;
    await onVerify?.(otpValue);
  };

  return (
    <div className="signin-banner-from-wrap">
      <div className="signin-banner-title-box">
        <h5 className="signin-banner-from-title">
          We have sent you the code at
        </h5>
      </div>

      <div className="signin-banner-from-box text-center">
        <small>{email || "test@mail.com"}</small>

        <form>
          <div className="row">
            <small>To login the dashboard, Enter the code here</small>
            <div className="col-12 mt-2">
              <div className="mb-6 flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    value={digit}
                    maxLength={1}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="h-12 w-12 rounded-md text-center text-lg"
                    style={
                      error
                        ? { border: "1px solid red" }
                        : { border: "1px solid #d1d5db" }
                    }
                  />
                ))}
              </div>

              {/* ✅ ERROR MESSAGE */}
              {error && (
                <small style={{ color: "red", display: "block", marginTop: 6 }}>
                  {error}
                </small>
              )}
            </div>
          </div>
        </form>

        <div className="signin-banner-form-remember pt-10">
          <div className="row">
            <div className="col-12">
              <div className="postbox__comment-agree text-left">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={agreeOffers}
                    onChange={(e) => setAgreeOffers(e.target.checked)}
                  />
                  <small>
                    I agree to receive offers, tips and product updates sent by
                    Pixelflow. Unsubscribe anytime.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="postbox__comment-agree text-left">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <small>
                    I agree to PixelFlow’s Terms of Service & Privacy Policy.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="signin-banner-from-btn mt-20">
          <button
            type="button"
            className="signin-btn w-full"
            onClick={submitOtp}
            disabled={!canSubmit}
            style={
              !canSubmit
                ? { cursor: "not-allowed", opacity: 0.6 }
                : { cursor: "pointer" }
            }
          >
            {loading ? (
              <span className="d-inline-flex align-items-center gap-2">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                />
                Verifying...
              </span>
            ) : (
              "Verify OTP"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
