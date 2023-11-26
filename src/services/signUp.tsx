import axios from "axios";

export const signUp = (username: String, password: string) => {
  const body = {
    username,
    password,
  };

  axios
    .post("http://localhost:3003/admin/signup", body)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
