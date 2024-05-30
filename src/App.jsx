import React, { useState } from "react";
import Home from "./Components/Home";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import Header from "./Components/Header";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Header />
      <div className="flex justify-between px-5 my-4">
        <SearchBar setQueryInfo={setQuery} />
        <Filter setQueryInfo={setQuery} />
      </div>
      <Home query={query} />
    </div>
  );
};

export default App;
