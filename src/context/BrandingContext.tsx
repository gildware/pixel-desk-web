"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api.config";
import { getSafeImageSrc } from "../utils/safeUrl";

export type Branding = {
  siteName: string;
  logoUrl: string | null;
  logoDarkUrl: string | null;
  faviconUrl: string | null;
};

const DEFAULT_BRANDING: Branding = {
  siteName: "PixelDesk",
  logoUrl: null,
  logoDarkUrl: null,
  faviconUrl: null,
};

const BrandingContext = createContext<{
  branding: Branding;
  loading: boolean;
}>({
  branding: DEFAULT_BRANDING,
  loading: true,
});

function applyFavicon(faviconUrl: string | null) {
  const safeFavicon = getSafeImageSrc(faviconUrl);
  if (typeof document === "undefined" || !safeFavicon) return;
  const head = document.head;
  head
    .querySelectorAll("link[rel~='icon']")
    .forEach((el) => el.parentNode?.removeChild(el));
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = safeFavicon;
  head.appendChild(link);
}

export function BrandingProvider({ children }: { children: React.ReactNode }) {
  const [branding, setBranding] = useState<Branding>(DEFAULT_BRANDING);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(`${API_BASE_URL}/public/branding`, { credentials: "include" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((body) => {
        if (!active) return;
        const data = (body?.data ?? body) as Partial<Branding>;
        setBranding({
          siteName: data.siteName || DEFAULT_BRANDING.siteName,
          logoUrl: getSafeImageSrc(data.logoUrl ?? null),
          logoDarkUrl: getSafeImageSrc(data.logoDarkUrl ?? null),
          faviconUrl: getSafeImageSrc(data.faviconUrl ?? null),
        });
      })
      .catch(() => {
        /* keep defaults */
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    applyFavicon(branding.faviconUrl);
  }, [branding.faviconUrl]);

  return (
    <BrandingContext.Provider value={{ branding, loading }}>
      {children}
    </BrandingContext.Provider>
  );
}

export const useBranding = () => useContext(BrandingContext);
