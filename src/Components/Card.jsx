import React from "react";

const Card = ({ info }) => {
  return (
    <div className=" mb-6 w-56 border rounded-xl overflow-hidden border-zinc-100 shadow-xl hover:scale-105 cursor-pointer">
      <div className="w-[100%] h-[18vh]">
        <img src={info.flags.svg} className="h-full w-full object-cover" />
      </div>
      <div className="p-4 h-[200px]">
        <h1 className="font-extrabold text-[1.2rem] mb-2">
          {info.name.common}
        </h1>
        <p>
          <b>Population:</b> {info.population}
        </p>
        <p>
          <b>Region:</b>
          {info.region}
        </p>
        <p>
          <b>Capital:</b>
          {info.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
