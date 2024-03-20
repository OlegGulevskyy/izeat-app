import {
  BuildingStorefrontIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { MessageCircleIcon } from "lucide-react";

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
  { name: "Profile", href: "/profile", icon: UserIcon, isProtected: true },
];

export const userNav = [
  { name: "Settings", href: "/settings" },
];

export const POST_PRODUCT_PATH = "/products/new";
