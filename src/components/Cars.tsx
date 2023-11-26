"use client";
import { useState, useEffect } from "react";
import useForm from "@/hooks/useForm";
import { deleteCar } from "@/services/deleteCar";
import { insertCar } from "@/services/insertCar";
import { updateCar } from "@/services/updateCar";
import { getCars } from "@/services/getCars";

export default function Cars() {
  const [edit, setEdit] = useState(false);
  const [carEditId, setCarEditId] = useState(Number());
  const [cars, setCars] = useState([]);
  const [form, handleInputChange, clear] = useForm({
    model: "",
    year: "",
    price: "",
  });
  const [formEdit, handleInputChangeEdit, clearEdit] = useForm({
    price: "",
    status: "",
  });
  const token = localStorage.getItem("token");

  const editCarId = (edit: boolean, id: number) => {
    setCarEditId(id);
    if (edit === false) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  useEffect(() => {
    getCars(setCars);
  }, []);

  const OnSubmitForm = (e: any) => {
    e.preventDefault();
    insertCar(form.model, form.year, form.price, setCars);
    clear();
  };

  const OnSubmitEditForm = (e: any) => {
    e.preventDefault();
    updateCar(carEditId, formEdit.price, formEdit.status, setCars);
    clearEdit();
  };

  return (
    <div className="gap-5 min-h-full flex justify-between items-center flex-col">
      {token ? (
        <div className="flex items-center justify-center">
          <form
            className="flex justify-between flex-wrap items-center gap-3"
            onSubmit={OnSubmitForm}
          >
            <input
              name="model"
              placeholder="Model"
              value={form.model}
              onChange={handleInputChange}
            />
            <input
              name="year"
              placeholder="Year"
              value={form.year}
              onChange={handleInputChange}
            />
            <input
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleInputChange}
            />
            <button className="bg-red-500 px-2" type="submit">
              Add Car
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      {edit && token ? (
        <div>
          <form
            className="flex justify-between items-center gap-3"
            onSubmit={OnSubmitEditForm}
          >
            <input
              name="price"
              value={formEdit.price}
              placeholder="Price"
              onChange={handleInputChangeEdit}
            />
            <input
              name="status"
              value={formEdit.status}
              placeholder="Status"
              onChange={handleInputChangeEdit}
            />
            <button className="bg-red-500 px-2" type="submit">
              Update Car
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex flex-col gap-5 h-screen items-center mt-10">
        {cars?.length > 0 ? (
          cars?.map((car: any) => {
            return (
              <div
                className="w-10/12 m-5 border border-gray-500  flex flex-col gap-5 justify-between items-center"
                key={car.id}
              >
                <div className="w-full p-2 flex justify-around items-start">
                  <span className="w-3/12 flex items-start">{car.model}</span>
                  <span className="w-3/12 flex items-start">{car.year}</span>
                  <span className="w-3/12 flex items-start">
                    R$ {car.price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="w-3/12 flex items-start">{car.status}</span>
                </div>
                {token ? (
                  <div className="w-full flex gap-10 p-2">
                    <button
                      onClick={() => editCarId(edit, car.id)}
                      className="bg-red-500 px-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteCar(car.id, setCars)}
                      className="bg-red-500 px-2"
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
}
