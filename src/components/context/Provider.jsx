import { useState } from "react";
import { MyContext } from "./MyContext";

const MyProvider = ({ children }) => {
  const [text, setText] = useState(null);
  const [searchCity, setSearchCity] = useState("New Delhi");

  return (
    <MyContext.Provider
      value={{
        text,
        setText,
        setSearchCity,
        searchCity,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
