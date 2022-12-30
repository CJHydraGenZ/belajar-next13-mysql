"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Nav from "./components/Nav";

import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
    // return (
    //   <>
    //     Signed in as {session.user.email} <br />
    //     <button onClick={() => signOut()}>Sign out</button>
    //   </>
    // );
  }
  return (
    <main>
      <h1>{session?.user?.email}</h1>
      <button onClick={() => signOut()}>Sign out</button>
      <h1 className="text-center text-yellow-500">haalsas</h1>
    </main>
  );
}
