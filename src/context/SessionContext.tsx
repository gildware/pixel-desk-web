"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getSession } from "../services/api/auth.api";

type Session = any | null;

const SessionContext = createContext<{
  session: Session;
  loading: boolean;
  refresh: () => Promise<void>;
}>({
  session: null,
  loading: true,
  refresh: async () => {},
});

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const data = await getSession();
      setSession(data);
    } catch {
      setSession(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <SessionContext.Provider value={{ session, loading, refresh }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
