import {
  BuildingStorefrontIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { MessageCircleIcon } from "lucide-react";

export const appNav = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Messages", href: "/messages", icon: MessageCircleIcon },
  { name: "Products", href: "/products", icon: BuildingStorefrontIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

export const userNav = [
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/logout" },
];

export const POST_PRODUCT_PATH = "/products/new";
