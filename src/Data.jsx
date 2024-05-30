import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Country } from "./Components/CountryContext";
import CardDetails from "./Components/CardDetails";

const Data = () => {
  const { val } = useContext(Country);
  const { name } = useParams();
  return (
    <div>
      {/* <h1>Data</h1>
      <h1>{name}</h1> */}
      {val
        .filter((v) => v.name.common === name)
        .map((v , i) => (
          <CardDetails key={i} info={v} />
        ))}
    </div>
  );
};

export default Data;
