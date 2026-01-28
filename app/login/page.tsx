"use client";

import { useState } from "react";
import LoginForm from "@/src/components/auth/LoginForm";
import OtpVerification from "@/src/components/auth/OtpVerification";
import { requestOtp, verifyOtp } from "@/src/services/api/auth.api";

export default function AuthPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRequestOtp = async (value: string) => {
    try {
      setLoading(true);
      await requestOtp(value);
      setEmail(value);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    if (!email) return;

    try {
      setLoading(true);
      await verifyOtp(email, otp);

      // ✅ cookies are now set by backend
      // redirect user to billing / company selection
      window.location.href = "/profile";
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        {!email ? (
          <LoginForm onContinue={handleRequestOtp} />
        ) : (
          <OtpVerification email={email} onVerify={handleVerifyOtp} />
        )}
        {loading && (
          <p className="mt-4 text-center text-sm text-zinc-500">Processing…</p>
        )}
      </div>
    </div>
  );
}
