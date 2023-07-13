import { useState, useContext, useEffect } from "react";
import { MarvelContext } from "../App";
const Search = () => {
  const { search, setSearch } = useContext(MarvelContext);
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <input
      placeholder="search..."
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
};

export default Search;
