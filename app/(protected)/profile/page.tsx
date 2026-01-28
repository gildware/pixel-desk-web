"use client";

import { useEffect, useState } from "react";
import { getMe } from "@/src/services/api/user.api";
import { logout } from "@/src/services/api/auth.api";

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: any = await getMe();
        setUser(response.data ?? response);
      } catch (err: any) {
        setError(err.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-zinc-500">Loading profile…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-red-600">{error}</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900">Profile</h1>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="rounded-md border border-red-200 px-4 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
          >
            {loggingOut ? "Logging out…" : "Logout"}
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-zinc-500">Email</p>
            <p className="font-medium text-zinc-900">{user.email}</p>
          </div>

          <div>
            <p className="text-zinc-500">First name</p>
            <p className="font-medium text-zinc-900">{user.firstName || "—"}</p>
          </div>

          <div>
            <p className="text-zinc-500">Last name</p>
            <p className="font-medium text-zinc-900">{user.lastName || "—"}</p>
          </div>

          <button
            onClick={() => {
              window.open(process.env.NEXT_PUBLIC_DASHBOARD_URL, "_blank");
            }}
            className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
