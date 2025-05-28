"use client";
import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const RouteContext = createContext<string>("/");

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <RouteContext.Provider value={pathname}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoute() {
  return useContext(RouteContext);
}
