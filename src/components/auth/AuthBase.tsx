"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginForm from "@/src/components/auth/LoginForm";
import OtpVerification from "@/src/components/auth/OtpVerification";
import PasswordLoginForm from "@/src/components/auth/PasswordLoginForm";
import ForgotPasswordForm from "@/src/components/auth/ForgotPasswordForm";
import CheckEmailNotice from "@/src/components/auth/CheckEmailNotice";
import {
  forgotPassword,
  loginWithPassword,
  logout,
  requestOtp,
  verifyOtp,
} from "@/src/services/api/auth.api";
import { useSession } from "@/src/context/SessionContext";

type AuthStep = "email" | "password" | "otp" | "forgot" | "check-email";

function dashboardRedirectUrl(baseUrl: string): string {
  try {
    const url = new URL(baseUrl, window.location.origin);
    url.searchParams.set("_cb", Date.now().toString());
    return url.toString();
  } catch {
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}_cb=${Date.now()}`;
  }
}

export default function AuthBase() {
  const { session, loading: sessionLoading } = useSession();
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "/dashboard";
  const [step, setStep] = useState<AuthStep>("email");
  const [email, setEmail] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (!sessionLoading && session) {
      window.location.replace(dashboardRedirectUrl(dashboardUrl));
    }
  }, [dashboardUrl, session, sessionLoading]);

  const normalizeEmail = (value: string) => value.trim().toLowerCase();

  const resetToEmail = () => {
    setStep("email");
    setEmail(null);
    setError(undefined);
  };

  const isOtpAlreadySentError = (message: string) =>
    /please wait .* before requesting a new otp/i.test(message) ||
    /too many resend attempts/i.test(message);

  const handleRequestOtp = async (value: string, rememberChoice: boolean) => {
    try {
      setLoading(true);
      setError(undefined);
      await requestOtp(value);
      setEmail(value);
      setRememberMe(rememberChoice);
      setStep("otp");
    } catch (err: any) {
      const message = err?.message || "Something went wrong";
      // Cooldown / resend-block means a code was already issued — still show OTP entry.
      if (isOtpAlreadySentError(message)) {
        setEmail(value);
        setRememberMe(rememberChoice);
        setError(message);
        setStep("otp");
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  /** From password screen: always open OTP UI, then try to send/resend. */
  const handleSwitchToOtp = async (rememberChoice: boolean) => {
    if (!email) return;
    setRememberMe(rememberChoice);
    setError(undefined);
    setStep("otp");
    try {
      // Do not toggle shared `loading` — that labels the verify button "Verifying…".
      await requestOtp(email);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    }
  };

  const handleResendOtp = async () => {
    if (!email) return;
    try {
      await requestOtp(email);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    if (!email) return;
    try {
      setLoading(true);
      setError(undefined);
      await verifyOtp(email, otp, rememberMe);
      window.location.replace(dashboardRedirectUrl(dashboardUrl));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordLogin = async (
    password: string,
    rememberChoice: boolean,
  ) => {
    if (!email) return;
    try {
      setLoading(true);
      setError(undefined);
      setRememberMe(rememberChoice);
      await loginWithPassword(email, password, rememberChoice);
      window.location.replace(dashboardRedirectUrl(dashboardUrl));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (value: string) => {
    try {
      setLoading(true);
      setError(undefined);
      const normalized = normalizeEmail(value);
      await forgotPassword(normalized);
      setEmail(normalized);
      setStep("check-email");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await logout();
      window.location.href = "/login";
    } catch (err: any) {
      alert(err.message || "Logout failed");
    } finally {
      setLoggingOut(false);
    }
  };

  let authContent = (
    <LoginForm
      onPassword={(value, rememberChoice) => {
        setEmail(normalizeEmail(value));
        setRememberMe(rememberChoice);
        setError(undefined);
        setStep("password");
      }}
      onOtp={handleRequestOtp}
      onForgotPassword={(value) => {
        setError(undefined);
        setEmail(value ? normalizeEmail(value) : null);
        setStep("forgot");
      }}
      loading={loading}
      error={error}
    />
  );

  if (step === "forgot") {
    authContent = (
      <ForgotPasswordForm
        initialEmail={email || ""}
        onSubmit={handleForgotSubmit}
        onBack={() => setStep(email ? "password" : "email")}
        loading={loading}
        error={error}
      />
    );
  } else if (step === "check-email" && email) {
    authContent = (
      <CheckEmailNotice
        email={email}
        loading={loading}
        error={error}
        onResend={() => handleForgotSubmit(email)}
        onBack={resetToEmail}
      />
    );
  } else if (step === "password" && email) {
    authContent = (
      <PasswordLoginForm
        email={email}
        initialRememberMe={rememberMe}
        loading={loading}
        error={error}
        onSubmit={handlePasswordLogin}
        onForgotPassword={() => {
          setError(undefined);
          setStep("forgot");
        }}
        onUseOtp={(rememberChoice) => handleSwitchToOtp(rememberChoice)}
        onChangeEmail={resetToEmail}
      />
    );
  } else if (step === "otp" && email) {
    authContent = (
      <OtpVerification
        email={email}
        onVerify={handleVerifyOtp}
        onResendOtp={handleResendOtp}
        loading={loading}
        error={error}
      />
    );
  }

  return (
    <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
      <Link
        href="/"
        className="tp-btn-yellow position-absolute top-0 start-0 m-3 d-inline-flex align-items-center"
      >
        ← Back
      </Link>
      <div
        className="signin-banner-left-box signin-banner-bg p-relative"
        style={{ backgroundImage: "url(/assets/img/login/login-bg-shape.png)" }}
      >
        <div className="signin-banner-bottom-shape">
          <img src="/assets/img/login/login-shape-1.png" alt="" />
        </div>

        <div className="signin-banner-left-wrap">
          <div className="signin-banner-title-box mb-100">
            <h4 className="signin-banner-title">
              Welcome To <br />
              Pixel Desk.
            </h4>
          </div>

          <div className="signin-banner-img-box position-relative">
            <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
              <img src="/assets/img/login/login-2.png" alt="" />
            </div>
            <div className="signin-banner-img signin-img-2 d-none d-md-block">
              <img src="/assets/img/login/login-1.png" alt="" />
            </div>
            <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
              <img src="/assets/img/login/login-3.png" alt="" />
            </div>
            <div className="signin-banner-img signin-img-4 d-none d-sm-block">
              <img src="/assets/img/login/login-4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {!sessionLoading && (
        <div className="signin-banner-from d-flex justify-content-center align-items-center">
          {session ? (
            <div className="text-center">
              <small>Redirecting to dashboard...</small>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="tp-btn-red mt-4"
              >
                {loggingOut ? "Logging out…" : "Logout"}
              </button>
            </div>
          ) : (
            authContent
          )}
        </div>
      )}
    </div>
  );
}
