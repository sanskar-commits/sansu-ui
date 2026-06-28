import type { ReactNode } from "react";

export interface SansuProviderProps {
  children: ReactNode;
}

export function SansuProvider({
  children,
}: SansuProviderProps) {
  return <>{children}</>;
}