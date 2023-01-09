"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AdminDashboard from "./admin/page";
import Nav from "./components/Nav";
import Login from "./login/page";

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}

function Layout({ children }) {
  if (Login.getLayout) {
    return Login.getLayout(children);
  } else {
    return (
      <>
        <Nav />
        {children}
      </>
    );
  }
}
export default function Provider({ children }) {
  // const { data: session } = useSession();

  return (
    <SessionProvider refetchOnWindowFocus={false}>
      {/* {!session ? redirect("/login") : <Nav />} */}
      {AdminDashboard.auth
        ? (
          <Auth>
            {/* <Nav /> */}
            {children}
          </Auth>
        )
        : { children }}
    </SessionProvider>
  );
}
