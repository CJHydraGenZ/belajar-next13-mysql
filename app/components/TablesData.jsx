import React, { useEffect, useState } from "react";
import useSWR, { preload } from "swr";
async function getAllData() {
  const res = await fetch("/api/user");
  return res.json();
}
const fetcher = (url) => fetch(url).then((res) => res.json());
// function useUser() {
//   return useSWR("/api/user", fetcher);
// }

// preload("/api/user", fetcher);
export default function TablesData() {
  // const data = await getAllData();
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //    async function fetchData(){

  //    }
  //    fe
  // },[])
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  // const { data, isLoading } = useUser();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {data?.map((d, i) => (
        <div key={i}>
          <h3>{d.email}</h3>
          <h3>{d.nama}</h3>
        </div>
      ))}
    </div>
  );
}
