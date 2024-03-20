import { headers } from "next/headers";
import { Roboto } from "next/font/google";

import { TailwindIndicator } from "~/components/tw-indicator";
import { Providers } from "~/providers";
import { cn } from "~/utils/cn";
import { Toaster } from "~/components/ui/toaster";
import { getServerUser } from "~/utils/auth";
import { AuthProvider } from "~/providers/AuthProvider/AuthProvider";
import { TRPCReactProvider } from "~/trpc/react";
import { MainLayout } from "~/layouts/main";

import "~/styles/globals.css";

export const metadata = {
  title: "Izeat",
  description: "Share good food with good people",
};

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerUser();

  return (
    <>
      <html lang="en">
        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body
          className={cn(
            "flex min-h-screen flex-col bg-background font-sans antialiased overflow-y-hidden",
            font.className,
          )}
        >
          <TRPCReactProvider headers={headers()}>
            <AuthProvider {...user}>
              <Providers>
                <MainLayout>{children}</MainLayout>
                <Toaster />
              </Providers>
            </AuthProvider>
          </TRPCReactProvider>
          <TailwindIndicator />
        </body>
      </html>
    </>
  );
}

export default RootLayout;
