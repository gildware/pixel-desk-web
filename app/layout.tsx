import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelDesk - Project Management & Collaboration Tool",
  description:
    "PixelDesk is a powerful project management and collaboration tool designed to streamline your workflow and enhance team productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* CSS (same as your HTML) */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/custom-animation.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* JS (same as your HTML, same order) */}
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/waypoints.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/magnific-popup.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/counterup.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/nice-select.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.js" strategy="afterInteractive" />
        <Script src="/assets/js/meanmenu.js" strategy="afterInteractive" />
        <Script src="/assets/js/tilt.jquery.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope-pkgd.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/imagesloaded-pkgd.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/ajax-form.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/split-text.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ScrollSmoother.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/parallax-scroll.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/purecounter.js" strategy="afterInteractive" />
        <Script src="/assets/js/jarallax.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
