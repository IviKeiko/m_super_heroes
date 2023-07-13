import React from "react";
import { useContext } from "react";
import { MarvelContext } from "../App";

const BookmarkButton = ({ name, thumbnail, id }) => {
  const { bookmarks, setBookmarks } = useContext(MarvelContext);

  const bookmarkHero = () => {
    setBookmarks([...bookmarks, { name: name, thumbnail: thumbnail, id: id }]);
    localStorage.setItem(
      "usersBookmarks",
      JSON.stringify([
        ...bookmarks,
        { name: name, thumbnail: thumbnail, id: id },
      ])
    );
  };

  const unbookmarkHero = () => {
    let newBookmarksArray = bookmarks.filter((item) => item.id !== id);
    setBookmarks(newBookmarksArray);
    localStorage.setItem("usersBookmarks", JSON.stringify(newBookmarksArray));
  };

  let flag = true;
  const renderUnbookmarked = bookmarks?.map((e) => {
    if (e.id === id) {
      flag = false;
      return (
        <button className="bookmark-btn bookmarked" onClick={unbookmarkHero}>
          bookmarked
        </button>
      );
    }
  });
  return (
    <>
      {flag === true ? (
        <button className="bookmark-btn" onClick={bookmarkHero}>
          bookmark
        </button>
      ) : (
        renderUnbookmarked
      )}
    </>
  );
};

export default BookmarkButton;
