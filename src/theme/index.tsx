"use client";

import { useMemo } from "react";
import merge from "lodash/merge";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  type ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import { useLocales } from "src/locales";

import { useSettingsContext } from "src/components/settings";

// system
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
// options
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";
import NextAppDirEmotionCacheProvider from "./next-emotion-cache";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { currentLang } = useLocales();

  const settings = useSettingsContext();

  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette(settings.themeMode),
      },
      customShadows: {
        ...customShadows(settings.themeMode),
      },
      shadows: shadows(settings.themeMode),
      shape: { borderRadius: 8 },
      typography,
    }),
    [settings.themeMode],
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = merge(componentsOverrides(theme));

  const themeWithLocale = useMemo(
    () => createTheme(theme, currentLang!.systemValue),
    [currentLang, theme],
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <MuiThemeProvider theme={themeWithLocale}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
