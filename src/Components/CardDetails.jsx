import React from "react";

const CardDetails = ({ info }) => {
  return (
    <div className=" w-full flex ">
      <div className=" w-full flex justify-center gap-5 items-center border rounded-xl overflow-hidden ">
        <div className=" w-[500px] ">
          <img src={info.flags.svg} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
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
            <b>Subregion:</b>
            {info.subregion}
          </p>
          <p>
            <b>Capital:</b>
            {info.capital}
          </p>
          <p>
            <b>Area:</b>
            {info.area}
          </p>
          
          <p>
            <b>Timezones:</b>
            {info.timezones}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
