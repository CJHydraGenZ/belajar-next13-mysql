"use client";
import "./globals.css";
import Nav from "./components/Nav";
import Provider from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
