import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: "Home",
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: "/",
  },
  {
    title: "About Izeat",
    icon: <Iconify icon="bx:bx-info-circle" />,
    path: "/about",
  },
  {
    title: "Contact us",
    icon: <Iconify icon="bx:bx-mail-send" />,
    path: "/contact",
  }
];

export const mobileNavConfig = [
  ...navConfig,
  {
    title: "Dashboard",
    icon: <Iconify icon="carbon:dashboard" />,
    path: "/dashboard",
  },
];
