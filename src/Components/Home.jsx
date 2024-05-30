import React, { useContext, useState } from "react";
import Card from "./Card";
import { Country } from "./CountryContext";
import { NavLink } from "react-router-dom";

const Home = ({ query }) => {
  const { val } = useContext(Country);
  const [length, setLength] = useState(12);
  const showItems = ()=>{
    setLength(prev => prev +12)
  }
  return (
    
    <div className="w-[100%] p-4  flex justify-center gap-7 flex-wrap ">
      {val
        .filter(
          (countryInfo) =>
            countryInfo.name.common
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            countryInfo.region.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, length)
        .map((info, i) => (
          <NavLink key={i} to={`/${info.name.common}`}>
            <Card info={info} key={i} />
          </NavLink>
        ))}
        <button
        className="" 
        onClick={showItems}
        >Load More 👉🏾 </button>
    </div>
  );
};

export default Home;
