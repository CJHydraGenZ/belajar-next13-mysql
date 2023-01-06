"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function LoginBtn() {
  const { data: session } = useSession();
  // if (session) {
  //   redirect("/");
  //   // return (
  //   //   <>
  //   //     Signed in as {session.user.email} <br />
  //   //     <button onClick={() => signOut()}>Sign out</button>
  //   //   </>
  //   // );
  // }
  return (
    <>
      {/* Not signed in <br /> */}
      <div className="flex flex-col">
        <div>
          <p className="text-center font-semibold">or</p>
        </div>
        <button
          className="bg-yellow-300 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          type="button"
          onClick={() => signIn("google")}
        >
          Sign in with google
        </button>
      </div>
    </>
  );
}
