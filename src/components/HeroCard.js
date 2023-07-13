import React from "react";
import BookmarkButton from "./BookmarkButton";

const HeroCard = ({ comic }) => {
  const { name, thumbnail, id } = comic;
  return (
    <div className="hero-card">
      <h4>{name}</h4>
      <div className="img-container">
        <img src={`${thumbnail.path}.jpg`} alt={name} />
      </div>
      <BookmarkButton name={name} thumbnail={thumbnail} id={id} />
    </div>
  );
};

export default HeroCard;
