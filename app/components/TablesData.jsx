import React from "react";

// const fetcher = (url) => fetch(url).then((res) => res.json());
// function useUser() {
//   return useSWR("/api/user", fetcher);
// }

// preload("/api/user", fetcher);
export default function TablesData({ data, isLoading }) {
  // const data = await getAllData();
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //    async function fetchData(){

  //    }
  //    fe
  // },[])
  // const { data, error, isLoading } = useSWR("/api/user", fetcher);

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
