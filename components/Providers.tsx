"use client";

import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  );
};

export default Providers;
