"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Nav from "./components/Nav";

import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Hero from "./components/Hero";
import Footer from "./footer";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const { data: session } = useSession();
  // if (!session) {
  //   redirect("/login");
  //   // return (
  //   //   <>
  //   //     Signed in as {session.user.email} <br />
  //   //     <button onClick={() => signOut()}>Sign out</button>
  //   //   </>
  //   // );
  // }
  return (
    <main>
      <Nav />
      <Hero />
      <Footer />
      {/* <h1>{session?.user?.email}</h1> */}
      {/* <button onClick={() => signOut()}>Sign out</button> */}
      {/* <h1 className="text-center text-yellow-500">Home</h1> */}
    </main>
  );
}
