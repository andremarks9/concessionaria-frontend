import axios from "axios";

export const login = (username: String, password: string, setToken: any) => {
  const body = {
    username,
    password,
  };

  axios
    .post("http://localhost:3003/admin/login", body)
    .then((res) => {
      setToken(res.data);
      localStorage.setItem("token", res.data);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
