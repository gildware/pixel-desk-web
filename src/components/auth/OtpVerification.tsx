"use client";

import { useState } from "react";

interface OtpVerificationProps {
  email: string;
  onVerify?: (otp: string) => void;
}

export default function OtpVerification({
  email,
  onVerify,
}: OtpVerificationProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const submitOtp = () => {
    onVerify?.(otp.join(""));
  };

  return (
    <>
      <h2 className="mb-2 text-center text-xl font-semibold text-violet-600">
        We have sent you the code
      </h2>

      <p className="mb-6 text-center text-sm text-zinc-600">
        at <span className="font-medium">{email}</span>
      </p>

      <p className="mb-4 text-center text-sm text-zinc-700">
        To login the dashboard, enter the code here
      </p>

      <div className="mb-6 flex justify-center gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index)}
            className="h-12 w-12 rounded-md border border-zinc-300 text-center text-lg focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        ))}
      </div>

      <button
        onClick={submitOtp}
        className="mb-4 w-full rounded-md bg-violet-600 py-2 text-sm font-semibold text-white hover:bg-violet-700"
      >
        Verify
      </button>

      <div className="mb-4 space-y-2 text-xs text-zinc-600">
        <label className="flex items-center gap-2">
          <input type="checkbox" />I agree to receive offers and product
          updates.
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />I agree to Terms of Service & Privacy Policy.
        </label>
      </div>

      <p className="text-center text-xs text-zinc-500">
        Resend Code <span className="font-medium text-violet-600">00:58s</span>
      </p>
    </>
  );
}
