import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Country = createContext();
const CountryContext = (props) => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    ApiCall();
  }, []);

  const ApiCall = async () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setVal(data.data))
      .catch((err) => console.error(err));
  };

  return (
    <Country.Provider value={{ val, setVal }}>
      {props.children}
    </Country.Provider>
  );
};

export default CountryContext;
