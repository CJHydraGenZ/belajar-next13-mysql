import React from "react";
import DataDesa from "./dataDesa";

export default function page({ params }) {
  const desa = params.desa;
  return (
    <div>
      <h1>Desa : {desa}</h1>
      <DataDesa params={desa} />
    </div>
  );
}
