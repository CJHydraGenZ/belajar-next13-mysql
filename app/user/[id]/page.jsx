import React from "react";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  return res.json();
}

export default async function page({ params: { id } }) {
  const data = await getData(id);
  return (
    <>
      <div>page : {id}</div>
      {<p>{JSON.stringify(data)}</p>}
    </>
  );
}
