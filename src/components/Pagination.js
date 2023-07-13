import React from "react";
import { useContext } from "react";
import { MarvelContext } from "../App";

const Pagination = () => {
  const { currentPage, total, paginate } = useContext(MarvelContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / 20); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`page-btn ${currentPage === number ? "active-btn" : null}`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
