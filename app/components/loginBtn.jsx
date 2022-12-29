"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
    // return (
    //   <>
    //     Signed in as {session.user.email} <br />
    //     <button onClick={() => signOut()}>Sign out</button>
    //   </>
    // );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
