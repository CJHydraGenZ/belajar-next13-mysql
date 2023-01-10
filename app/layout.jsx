"use client";
import "./globals.css";
import Nav from "./components/Nav";
import Provider from "./provider";
import { AppWrapper } from "./components/context/AppContext";
import Login from "./login/page";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import { ThemeProvider } from "@material-tailwind/react";
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
  // function Layout({ children }) {
  //   if (Login.getLayout) {
  //     return Login.getLayout(children);
  //   } else {
  //     return (
  //       <>
  //         <Nav />
  //         {children}
  //       </>
  //     );
  //   }
  // }
  // if (Login.getLayout) {
  //   return Login.getLayout(children);
  // }
  return (
    <html lang="en" data-theme="dark">
      <body>
        {/* <AppWrapper> */}
        {/* <ThemeProvider> */}
        <Provider>
          {/* <Login */}
          {/* <Nav /> */}
          {children}
          {/* {Layout(children)} */}
        </Provider>
        {/* </ThemeProvider> */}
        {/* </AppWrapper> */}
      </body>
    </html>
  );
}
