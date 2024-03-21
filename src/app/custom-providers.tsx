"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function CustomProviders({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <CacheProvider>{children}</CacheProvider>
    </NextThemesProvider>
  );
}

const queryClient = new QueryClient();

export const CacheProvider = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};
