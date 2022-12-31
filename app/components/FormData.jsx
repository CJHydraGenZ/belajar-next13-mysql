"use client";
import React, { useState } from "react";

export default function FormData({ submitData }) {
  const [userData, setUserData] = useState({
    email: "",
    nama: "",
    tangalLahir: "",
  });
  const onChangeHandle = (e) => {
    setUserData((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="">
      <form onSubmit={(e) => submitData(e, userData)}>
        <input id="email" type="email" onChange={(e) => onChangeHandle(e)} />
        <input id="nama" type="text" onChange={(e) => onChangeHandle(e)} />
        <input
          id="tangalLahir"
          type="date"
          onChange={(e) => onChangeHandle(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
