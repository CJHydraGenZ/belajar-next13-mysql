"use client";

import { fetcher } from "@/components/func/fetcher";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Option, Select } from "@material-tailwind/react";
export default function Dashboard({ data_wilayah }) {
  const { data: session, status } = useSession();
  // const { data, error, isLoading } = useSWR(
  //   "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json",
  //   fetcher,
  // );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <div>dashboard</div>
      <div className="w-72">
        <Select label="Select Version">
          {data_wilayah?.map((d) => <Option key={d.id}>{d.name}</Option>)}
        </Select>
      </div>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
