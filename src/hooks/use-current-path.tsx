import { usePathname } from "next/navigation";
import { useAppParams } from "./use-app-params";

export const useCurrentPath = () => {
  const pathName = usePathname();
  const params = useAppParams();
  const pathWithoutLang = pathName.replace(`${params.lang}/`, "");
  return {
    pathName,
    pathWithoutLang,
  };
};
