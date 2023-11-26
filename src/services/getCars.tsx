import axios from "axios";

export const getCars = (setCars: any) => {
  axios
    .get("http://localhost:3003/cars")
    .then((res) => {
      setCars(res.data);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
