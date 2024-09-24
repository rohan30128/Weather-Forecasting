import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "./context/MyContext";
import location from "../../public/location.png"

export default function Input() {
  const { setSearchCity,text } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSearchCity(data.search);
    reset();
  };
  return (
    <div>
      <div className="flex text-white mb-2">
        <img src={location} className="w-10 h-10" />
        <h1 className="text-2xl">{text?.location?.name}</h1>
      </div>
    <div className="w-full flex gap-3">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex gap-3">
        <label className="input input-bordered  w-5/6  flex items-center gap-2">
          <input
            type="text"
            {...register("search", { required: true })}
            className="grow"
            placeholder="Search"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button className="btn btn-accent px-5">Search</button>
      </form>
    </div>
    </div>
  );
}
