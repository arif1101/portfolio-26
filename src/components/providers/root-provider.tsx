"use client";

import React, { ReactNode } from "react";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

interface RootProviderProps {
  children: ReactNode;
}

export function RootProvider({ children }: RootProviderProps) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
