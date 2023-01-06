"use client";
import "./globals.css";
import Nav from "./components/Nav";
import Provider from "./provider";
import { AppWrapper } from "./components/context/AppContext";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
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
    <html lang="en">
      <body>
        <AppWrapper>
          <Provider>
            {children}
          </Provider>
        </AppWrapper>
      </body>
    </html>
  );
}
