import { Providers } from "~/providers";
import { AuthProvider } from "~/providers/AuthProvider/AuthProvider";
import { TRPCReactProvider } from "~/trpc/react";
import { headers } from "next/headers";
import { getServerUser } from "~/utils/auth";

export const metadata = {
  title: "Izeat",
  description: "Share good food with good people",
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerUser();

  return (
    <>
      <html lang="en">
        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body>
          <TRPCReactProvider headers={headers()}>
            <AuthProvider {...user}>
              <Providers>{children}</Providers>
            </AuthProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
