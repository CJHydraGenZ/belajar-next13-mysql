"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Provider({ children }) {
  // const { data: session } = useSession();

  return (
    <SessionProvider refetchOnWindowFocus={false}>
      {/* {!session ? redirect("/login") : <Nav />} */}
      {children}
    </SessionProvider>
  );
}
