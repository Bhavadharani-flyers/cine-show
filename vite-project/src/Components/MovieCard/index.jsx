import React from "react";
import { ActionMovie, MovieOne } from "../../assets/images";

const MovieCard = ({ MovieGenre, MovieName }) => {
  return (
    <div className="box-border rounded">
      <img src={MovieOne} className="h-64" />
      <p className="pl-2 text-white text-2xl font-semibold">{MovieName}</p>
      <p className="pl-2 pb-4 text-[#94a3b8]">{MovieGenre}</p>
    </div>
  );
};

export default MovieCard;
