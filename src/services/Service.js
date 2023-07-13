// import React from "react";
// import { useState, useEffect, useContext } from "react";
// import { MarvelContext } from "../App";

// const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
// const REACT_APP_MY_API_KEY = process.env.REACT_APP_BASE_URL;

// const { setComics, search, currentPage, setTotal } = useContext(MarvelContext);

// const fetchMyHeroes = async (
//   limit = 20,
//   offset = (currentPage - 1) * limit,
//   name = search
// ) => {
//   const response = await fetch(
//     `${REACT_APP_BASE_URL}?nameStartsWith=${name}&limit=${limit}&offset=${offset}&apikey=${REACT_APP_MY_API_KEY}`
//   );
//   const recievedData = await response.json();
//   const comicsData = recievedData.data.result;
//   const totalNumberOfComics = recievedData.data.total;

//   setComics(comicsData);
//   setTotal(totalNumberOfComics);
// };
// fetchMyHeroes();
