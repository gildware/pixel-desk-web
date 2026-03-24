"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginForm from "@/src/components/auth/LoginForm";
import OtpVerification from "@/src/components/auth/OtpVerification";
import { logout, requestOtp, verifyOtp } from "@/src/services/api/auth.api";
import { useSession } from "@/src/context/SessionContext";
export default function AuthBase() {
  const { session, loading: sessionLoading } = useSession();
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "/dashboard";
  const [email, setEmail] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (!sessionLoading && session) {
      window.location.replace(dashboardUrl);
    }
  }, [dashboardUrl, session, sessionLoading]);

  const handleRequestOtp = async (value: string, rememberChoice: boolean) => {
    try {
      setLoading(true);
      await requestOtp(value);
      setEmail(value);
      setRememberMe(rememberChoice);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) return;
    try {
      await requestOtp(email);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    if (!email) return;

    try {
      setLoading(true);
      await verifyOtp(email, otp, rememberMe);

      // cookies are set by backend; reload into protected route
      window.location.replace(dashboardUrl);
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

      // ✅ cookies cleared by backend
      window.location.href = "/login";
    } catch (err: any) {
      alert(err.message || "Logout failed");
    } finally {
      setLoggingOut(false);
    }
  };
  return (
    <div
      className="signin-banner-area signin-banner-main-wrap d-flex align-items-center"
      //   style={{ height: "100vh", overflow: "hidden" }}
    >
      {/* BACK BUTTON */}
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
            <div className="flex flex-col gap-5justify-center text-center">
              <small>Redirecting to dashboard...</small>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="tp-btn-red mt-5 h-10"
              >
                {loggingOut ? "Logging out…" : "Logout"}
              </button>
            </div>
          ) : (
            <>
              {!email ? (
                <LoginForm
                  onContinue={handleRequestOtp}
                  loading={loading}
                  error={error}
                />
              ) : (
                <OtpVerification
                  email={email}
                  onVerify={handleVerifyOtp}
                  onResendOtp={handleResendOtp}
                  loading={loading}
                  error={error}
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
