import React, { useContext } from "react";
import { Country } from "./CountryContext";

const Filter = ({ setQueryInfo }) => {
  return (
    <div className="border border-zinc-300 p-2 m-1 rounded-xl inline-block">
      <select
        className="filter-by-region"
        onChange={(e) => setQueryInfo(e.target.value)}
      >
        <option hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
