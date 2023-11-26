import axios from "axios";
import { getCars } from "./getCars";

export const insertCar = (
  model: string,
  year: number,
  price: number,
  setCars: any
) => {
  const body = {
    model,
    year,
    price,
  };

  axios
    .post("http://localhost:3003/cars", body)
    .then((res) => {
      console.log(res);
      getCars(setCars);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
