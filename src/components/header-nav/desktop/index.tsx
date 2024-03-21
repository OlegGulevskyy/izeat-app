import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "~/app/i18n/client";
import { getLanguage } from "~/app/i18n/utils/get-language";

import { appNav } from "~/constants/navigation";
import { cn } from "~/utils/cn";

export const HeaderDesktop = () => {
  const pathName = usePathname();
  const params = useParams<{ lang: string }>();
  const { t } = useTranslation(getLanguage(params.lang), "common");

  return (
    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
      {appNav.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            item.href === pathName
              ? "border-indigo-500 text-gray-900"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
          )}
          aria-current={item.href === pathName ? "page" : undefined}
        >
          {t(item.name)}
        </Link>
      ))}
    </div>
  );
};
