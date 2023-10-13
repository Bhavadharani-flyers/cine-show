import { Link } from "react-router-dom";
import { Button } from "../../Components/Buttons";
import { Search } from "../../assets/Icons";
import MovieCard from "../../Components/MovieCard";

const Movies = [
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
  {
    src: "",
    MovieName: "Jawan",
    MovieGenre: "Action",
  },
];

const HomePage = () => {
  return (
    <div className="h-full">
      <header className="flex justify-end pt-2 pr-2">
        <Link to="/login">
          <Button
            ButtonName={"Login"}
            className="bg-[#f59e0b] text-white text-lg font-medium rounded w-24 h-10 "
          />
        </Link>
      </header>
      <div className="flex flex-row items-center ">
        <p className="text-white font-bold text-3xl pl-5">Now in cinemas</p>
        <span className=" pt-2 pl-4">
          <Search />
        </span>
      </div>
      <div className="pt-8 px-5 flex flex-wrap gap-20">
        {Movies.slice(0, 8).map((info) => {
          return (
            <MovieCard
              MovieGenre={info.MovieGenre}
              MovieName={info.MovieName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
