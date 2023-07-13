import React from "react";
import { useState, useEffect, useContext } from "react";

import "./App.css";

import Header from "./components/Header";
import AllHeroes from "./components/AllHeroes";

export const MarvelContext = React.createContext();

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const REACT_APP_MY_API_KEY = process.env.REACT_APP_MY_API_KEY;

const App = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    if (search.length === 0) return;

    const fetchMyHeroes = async (
      limit = 20,
      offset = (currentPage - 1) * limit,
      name = search
    ) => {
      const response = await fetch(
        `${REACT_APP_BASE_URL}?nameStartsWith=${name}&limit=${limit}&offset=${offset}&apikey=${REACT_APP_MY_API_KEY}`
      );
      const recievedData = await response.json();
      const comicsData = recievedData.data.results;
      const totalNumber = recievedData.data.total;

      setComics(comicsData);
      setTotal(totalNumber);
      setLoading(false);

      return comicsData;
    };
    fetchMyHeroes();
  }, [search, currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MarvelContext.Provider
      value={{
        comics,
        setComics,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        total,
        setTotal,
        bookmarks,
        setBookmarks,
        paginate,
      }}
    >
      <Header />
      <AllHeroes />
    </MarvelContext.Provider>
  );
};

export default App;
