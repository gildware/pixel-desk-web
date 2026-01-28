import { ReactNode } from "react";

export const HERO_CONTENT: {
  title1: ReactNode;
  title2: string;
  description: ReactNode;
} = {
  title1: (
    <>
      Great <span>Customer</span>
    </>
  ),
  title2: "Relationships Start Here.",
  description: (
    <>
      PixelDesk provides all customer management service within one software.
      <br />
      Our landing works on all devices.
    </>
  ),
};

export const HERO_IMAGES = {
  leftShape: "/assets/img/hero/hero-left-shape-3-1.png",
  gradientBg: "/assets/img/hero/hero-gradient-3.jpg",
  mainImage: "/assets/img/hero/hero-img-3-1.png",
  floatingImage: "/assets/img/hero/hero-img-3-1-3.png",
};

export const BROWSERS = [
  { label: "Windows", img: "/assets/img/hero/browser-icon-1.png" },
  { label: "Firefox", img: "/assets/img/hero/browser-icon-2.png" },
  { label: "Chrome", img: "/assets/img/hero/browser-icon-3.png" },
  { label: "macOS", img: "/assets/img/hero/browser-icon-4.png" },
  { label: "Linux", img: "/assets/img/hero/browser-icon-5.png" },
];
