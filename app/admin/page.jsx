import { fetcher } from "@/components/func/fetcher";
import { signOut, useSession } from "next-auth/react";
import Dashboard from "./dashboard";

export default async function AdminDashboard() {
  // const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (status === "unauthenticated") {
  //   return <p>Access Denied</p>;
  // }
  const data_kecamatan = await fetcher(
    `http://www.emsifa.com/api-wilayah-indonesia/api/districts/5101.json`,
  );
  // const data_desa = await fetcher(
  //   `http://www.emsifa.com/api-wilayah-indonesia/api/villages/5101040.json`,
  // );

  return (
    <>
      <h1>
        "Some super secret dashboard";
      </h1>
      <Dashboard data_wilayah={data_kecamatan} />
      {/* <button onClick={() => signOut()}>Sign out</button> */}
    </>
  );
}

AdminDashboard.auth = true;
