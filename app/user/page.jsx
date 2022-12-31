"use client";

import React, { Suspense } from "react";
import FormData from "../components/FormData";
import TablesData from "../components/TablesData";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "../components/func/fetcher";
import { postData } from "../components/func/context";

// async function postData(data) {
//   const { email, nama, tangalLahir } = data;
//   // console.log(data);
//   const res = await fetch("http://localhost:3000/api/user", {
//     method: "POST",
//     body: JSON.stringify({
//       email: email,
//       nama: nama,
//       tangalLahir: tangalLahir,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   return res.json();
// }

export default function User() {
  const { mutate } = useSWRConfig();

  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  const submitData = async (e, userData) => {
    // console.log(userData);
    e.preventDefault();
    const res = await postData(userData);
    mutate("/api/user");
    console.log(res);
  };

  // const data = getAllData();
  // console.log(data);
  return (
    <div className="container">
      {/* {JSON.stringify(data)} */}
      <FormData submitData={submitData} />
      <Suspense fallback="Loading...">
        <TablesData data={data} isLoading={isLoading} />
      </Suspense>
    </div>
  );
}
