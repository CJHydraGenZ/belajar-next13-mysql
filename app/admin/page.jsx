"use client";
import { signOut, useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <h1>
        "Some super secret dashboard";
      </h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}

AdminDashboard.auth = true;
