export const MENU_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  { label: "About", href: "/about" },
  {
    label: "Essential Page",
    href: "#",
    submenu: [
      { label: "Service", href: "/service" },
      { label: "Service Details", href: "/service-details" },
      { label: "Team", href: "/team" },
      { label: "Team Details", href: "/team-details" },
      { label: "Career", href: "/career" },
      { label: "Career Details", href: "/career-details" },
      { label: "Integrations", href: "/integrations" },
      { label: "Register", href: "/register" },
      { label: "Signin", href: "/sign-in" },
      { label: "Contact", href: "/contact" },
      { label: "404", href: "/404" },
    ],
  },
  { label: "Pricing", href: "/price" },
  {
    label: "Blog",
    href: "/blog-details",
    submenu: [
      { label: "Blog", href: "/blog" },
      { label: "Blog List", href: "/blog-list" },
      { label: "Blog Details", href: "/blog-details" },
      { label: "Blog Details 02", href: "/blog-details-2" },
    ],
  },
];