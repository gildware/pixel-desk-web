"use client";

import { useState } from "react";

interface LoginFormProps {
  onContinue: (email: string) => void;
}

export default function LoginForm({ onContinue }: LoginFormProps) {
  const [email, setEmail] = useState("");

  return (
    <>
      <h1 className="mb-6 text-center text-2xl font-semibold text-zinc-900">
        To get started, please sign in
      </h1>

      <div className="my-4 flex items-center gap-3 text-xs text-zinc-400">
        <div className="h-px flex-1 bg-zinc-200" />
        or
        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      <label className="mb-1 block text-sm font-medium text-zinc-700">
        Email address
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
      />

      <button
        onClick={() => onContinue(email)}
        disabled={!email}
        className="w-full rounded-md bg-violet-600 py-2 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
      >
        Continue
      </button>
    </>
  );
}
