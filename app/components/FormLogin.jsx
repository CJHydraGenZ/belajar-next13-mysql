"use client";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import LoginBtn from "./loginBtn";

export default function FormLogin() {
  // const { data: session } = useSession();
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: username,
      password,
    };
    const result = await signIn("credentials", { ...data, redirect: false });
    console.log("ini data login", data);
    console.log("result", result);
    const session = await getSession();
    console.log("session", session);
    // if (!result.error) {
    //   router.replace("/");
    // } else {
    //   setError(result.error);
    // }
  };
  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {error && <p className="text-center">{error}</p>}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
            {
              /* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */
            }
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => handleLogin(e)}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <LoginBtn />
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
