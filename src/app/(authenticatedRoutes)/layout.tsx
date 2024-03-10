import { type PropsWithChildren } from "react";
import { PrefetchTRPCQuery } from "~/components/prefetch-trpc-query";
import { PrivateRoute } from "~/components/private-route";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <PrivateRoute>
      <PrefetchTRPCQuery queryName="auth.getProfile">
        {children}
      </PrefetchTRPCQuery>
    </PrivateRoute>
  );
}
