import { ReactNode } from "react";

export const CARD_BLOCKS: {
  align: "left" | "right";
  title: ReactNode;
  description: ReactNode;
  buttonText?: string;
  buttonLink?: string;
  features?: { text: string; className: string }[];
  images: {
    main: string;
    shape1?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
  };
}[] = [
  {
    align: "left",
    title: (
      <>
        Manage <span>All your Cards</span> in one Place
      </>
    ),
    description: (
      <>
        Digital products are where it’s at! There are so many benefits to
        selling digital products. It’s easy to get started and they <br />
        can be extremely profitable
      </>
    ),
    buttonText: "Get Started Free",
    buttonLink: "service-details.html",
    images: {
      main: "/assets/img/card/card-bg.png",
      shape1: "/assets/img/card/card-shape-1.png",
      img1: "/assets/img/card/card-img-1.png",
      img2: "/assets/img/card/card-img-2.png",
      img3: "/assets/img/card/card-img-3.png",
      img4: "/assets/img/card/card-img-4.png",
    },
  },
  {
    align: "right",
    title: (
      <>
        Track and <span>Analyze Sales</span> in Real time
      </>
    ),
    description: (
      <>
        Centralize and simplify payments, and get comprehensive <br />
        insights on your financials softuch.!
      </>
    ),
    features: [
      { text: "No hidden fees.", className: "yellow-1" },
      { text: "100% security. Guaranteed.", className: "purple-2" },
      { text: "No training or maintenance needed", className: "green-3" },
    ],
    images: {
      main: "/assets/img/card/sale-1.png",
      img1: "/assets/img/card/sale-2.png",
      img2: "/assets/img/card/sale-3.png",
    },
  },
];
