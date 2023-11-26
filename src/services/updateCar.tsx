import axios from "axios";
import { getCars } from "./getCars";

export const updateCar = (
  id: number,
  price: number,
  status: string,
  setCars: any
) => {
  const body = {
    price,
    status,
  };
  console.log(body);
  axios
    .put(`http://localhost:3003/cars/${id}`, body)
    .then((res) => {
      console.log(res);
      getCars(setCars);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
