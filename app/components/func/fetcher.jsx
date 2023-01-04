import axios from "axios";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export async function registerAdd(params) {
  const { email, password, role } = params;
  // const res = await fetch("http://localhost:3000/api/register", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email: action.email,
  //     password: action.password,
  //     role: action.role,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // });
  const response = await axios.post("http://localhost:3000/api/register", {
    email,
    password,
    role,
  });
  return response.data;
}

export async function postData(data) {
  const { email, nama, tangalLahir } = data;
  // console.log(data);
  const res = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      nama: nama,
      tangalLahir: tangalLahir,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return res.json();
}

export async function getAllData() {
  const res = await fetch("/api/user");
  return res.json();
}
