import React, { useContext, useState } from "react";
import { Country } from "./CountryContext";
import { data } from "autoprefixer";

const SearchBar = ({ setQueryInfo }) => {
  return (
    <div className="border overflow-hidden border-slate-400  inline-block rounded-xl m-1">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full h-full align-middle pl-4 scale-105 "
        onInput={(e) => setQueryInfo(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
