import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "./context/MyContext";
import { getWeatherData } from "./api";

export default function Cards() {
  const [time, setTime] = useState(null);
  const { text, setSearchCity, searchCity } = useContext(MyContext);
  getWeatherData(searchCity);

  setTimeout(() => {
    const date = new Date();
    const time = `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    setTime(time);
  }, 1000);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const dis = `${position.coords.latitude},${position.coords.longitude}`;
      setSearchCity(dis);
    });
  }, []);
  return (
    <div className="sm:w-full w-fit  mx-auto">
      <div className="text-white flex text-3xl sm:w-1/2 w-fit mx-auto mt-14">
        <h1>
          {" "}
          {time} | {text?.location?.localtime?.split(" ")[0]}
        </h1>
      </div>
      <div className="flex justify-between items-center flex-col-reverse sm:flex-row sm:mt-28 mt-12 gap-10 sm:gap-5 text-white ">
        <div className="items-center text-3xl sm:mt-0 mt-28">
          <h1>{text?.location?.name}</h1>
        </div>
        <div className="flex sm:flex-row items-center flex-col sm:mx-0 mx-auto gap-5 text-4xl">
          <div className="sm:flex ">
            <img
              src={text?.current?.condition?.icon}
              className="sm:h-10 h-32"
            />
            <h1 className="text-6xl sm:text-4xl sm:mt-0 mt-5">
              {text?.current?.temp_c}°C
            </h1>
          </div>
          <h1 className="mt-5 sm:mt-0">{text?.current?.condition?.text}</h1>
        </div>
      </div>
    </div>
  );
}
