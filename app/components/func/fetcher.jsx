import axios from "axios";

export const fetcher = (url) => fetch(url).then((res) => res.json());
// const contextValue = useMemo(() => {
//   return [appState, setAppState];
// }, [appState, setAppState]);
export async function registerAdd(params) {
  const { email, password, role } = params;
  try {
    const { data } = await axios.post("http://localhost:3000/api/register", {
      email,
      password,
      role,
    });
    // console.log({data});
    return { data };
  } catch (error) {
    throw new Error(error);
  }
}

export async function postData(data) {
  const { email, nama, tangalLahir } = data;
  // console.log(data);
  try {
    const res = await fetch("/api/user", {
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
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllData() {
  try {
    // const res = await fetch("/api/user");
    const res = await fetcher("/api/user");
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
