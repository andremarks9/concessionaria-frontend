import axios from "axios";
import { getCars } from "./getCars";

export const deleteCar = (id: number, setCars: any) => {
  axios
    .delete(`http://localhost:3003/cars/${id}`)
    .then((res) => {
      console.log(res);
      getCars(setCars);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
