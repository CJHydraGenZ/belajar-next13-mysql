"use client";
import "./globals.css";
import Nav from "./components/Nav";
import Provider from "./provider";
import { AppWrapper } from "./components/context/AppContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <AppWrapper>
          <Provider>
            {children}
          </Provider>
        </AppWrapper>
      </body>
    </html>
  );
}
