"use client";

import React, { type PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

import {
  AnalyticsProvider,
  UmamiAnalyticsProvider,
} from "./AnalyticsProvider/AnalyticsProvider";
import { PosthogProvider } from "./Posthog";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <PosthogProvider>
        <ThemeProvider attribute="class" forcedTheme="light">
          {children}
        </ThemeProvider>
      </PosthogProvider>
      <AnalyticsProvider />
      <UmamiAnalyticsProvider />
    </>
  );
}
