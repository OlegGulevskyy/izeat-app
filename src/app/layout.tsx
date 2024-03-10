import "src/styles/global.css";
// i18n
import "src/locales/i18n";

import { Providers } from "src/providers";
import { AuthProvider } from "src/providers/AuthProvider/AuthProvider";
import { TRPCReactProvider } from "src/trpc/react";
import { headers } from "next/headers";
import { getServerUser } from "src/utils/auth";
import { primaryFont } from "src/theme/typography";
import { LocalizationProvider } from "src/locales";
import { SettingsDrawer, SettingsProvider } from "src/components/settings";
import ThemeProvider from "src/theme";
import { MotionLazy } from "src/components/animate/motion-lazy";
import ProgressBar from "~/components/progress-bar";

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Izeat",
  description: "Share good food with good people",
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerUser();

  return (
    <>
      <html lang="en" className={primaryFont.className}>
        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body>
          <TRPCReactProvider headers={headers()}>
            <AuthProvider {...user}>
              <LocalizationProvider>
                <SettingsProvider
                  defaultSettings={{
                    themeMode: "light", // 'light' | 'dark'
                  }}
                >
                  <ThemeProvider>
                    <MotionLazy>
                      <SettingsDrawer />
                      <ProgressBar />
                      <Providers>{children}</Providers>
                    </MotionLazy>
                  </ThemeProvider>
                </SettingsProvider>
              </LocalizationProvider>
            </AuthProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
