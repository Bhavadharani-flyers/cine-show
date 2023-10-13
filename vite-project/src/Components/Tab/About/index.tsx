import React from "react";
import MovieVideo from "../../../assets/video/MovieVideo.mp4";
// import TopBar from "../../TopBar";
interface About {
  Certificate: any;
  Runtime: any;
  Release: any;
  Genre: any;
  Cast: any;
  Director: any;
}

const About = ({
  Certificate,
  Runtime,
  Release,
  Genre,
  Cast,
  Director,
}: About) => {
  return (
    <div className="bg-[#075985] h-screen">
      {/* <div>
        <TopBar ScreenTitle={"Jawan"} />
      </div> */}
      <section className="pl-5 flex flex-row justify-center pt-20">
        <video src={MovieVideo} autoPlay={true} width="50%" />
        <div className="px-5">
          <section className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ut
            veniam minus fuga commodi totam inventore modi tempore labore unde
            dicta hic maiores ea dignissimos equi autem voluptate voluptate
            alias rerum!
          </section>
          <section className="flex flex-row gap-x-5">
            <div className="text-[#9ca3af] pt-5 flex flex-col gap-y-4">
              <p>Certificate</p>
              <p>Runtime</p>
              <p>Release</p>
              <p>Genre</p>
              <p>Director</p>
              <p>Cast</p>
            </div>
            <div className="text-white pt-5 flex flex-col gap-y-4">
              <p>{Certificate}</p>
              <p>{Runtime}</p>
              <p>{Release}</p>
              <p>{Genre}</p>
              <p>{Director}</p>
              <p>{Cast}</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
