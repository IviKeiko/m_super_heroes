import { useContext } from "react";
import { MarvelContext } from "../App";

import HeroCard from "./HeroCard";
import Pagination from "./Pagination";

const AllHeroes = () => {
  const { comics, search, bookmarks } = useContext(MarvelContext);
  return (
    <>
      <div className="heroes-container">
        {search.length === 0
          ? bookmarks.map((item) => {
              return <HeroCard key={item.id} comic={item} />;
            })
          : comics.map((item) => {
              console.log(item);
              return <HeroCard key={item.id} comic={item} />;
            })}
      </div>
      <Pagination />
    </>
  );
};

export default AllHeroes;
