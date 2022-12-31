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
