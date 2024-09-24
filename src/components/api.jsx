import axios from "axios";
import { useContext } from "react";
import { MyContext } from "./context/MyContext";
import toast from 'react-hot-toast';


const baseuri =
  "https://api.weatherapi.com/v1/current.json?key=ec62627df8ca406ba34165232242309";

export const getWeatherData = async (city) => {
  const { setText, setSearchCity} = useContext(MyContext);
  const response = await axios
    .get(`${baseuri}&q=${city}&aqi=yes`)
    .then((res) => res.data)
    .catch((err) => {
      setSearchCity("New Delhi")
      toast.error(err.response.data.error.message);
    });
  return await setText(response);
};
