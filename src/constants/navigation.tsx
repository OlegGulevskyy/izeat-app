import {
  BuildingStorefrontIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { MessageCircleIcon } from "lucide-react";

const SETTINGS_ROUTE_PATH = "/settings";

export const appNav = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageCircleIcon,
    isProtected: true,
  },
  {
    name: "Products",
    href: "/products",
    icon: BuildingStorefrontIcon,
    isProtected: true,
  },
  {
    name: "Profile",
    href: "/settings/profile",
    icon: UserIcon,
    isProtected: true,
  },
];

export const userNav = [{ name: "Settings", href: SETTINGS_ROUTE_PATH }];

export const POST_PRODUCT_PATH = "/products/new";

export const settingsNav = [
  { name: "General", href: SETTINGS_ROUTE_PATH + "/general" },
  { name: "Profile", href: SETTINGS_ROUTE_PATH + "/profile" },
  { name: "Billing", href: SETTINGS_ROUTE_PATH + "/billing" },
];
