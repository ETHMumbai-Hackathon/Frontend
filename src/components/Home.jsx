import React from "react";
import HomePng from "../assets/homepng.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex items-center py-10 w-full">
      <div className="bg-green-400 w-36 h-36 absolute -top-24 left-36 -z-10 rounded-full blur-3xl"></div>
      <div className="bg-green-400 w-24 h-24 absolute bottom-44 left-28 -z-10 rounded-full blur-3xl"></div>
      <div className="flex flex-col gap-5 w-full h-full">
        <h1 className="text-lg lg:text-3xl text-green-500 font-bold">
          Welcome to the Core 11
        </h1>
        <p className="text-white text-xl max-w-[650px]">
          Experience the thrill of decentralized fantasy gaming with CORE11 -
          where strategy meets blockchain innovation for the ultimate fantasy
          league adventure!
        </p>
        <Link to="/schedule">
          <button className="bg-white w-36 mt-3 hover:bg-zinc-300 text-black font-bold py-2 px-4 rounded">
            Play Now
          </button>
        </Link>
      </div>
      <div>
        <img src={HomePng} className="w-full ml-12 mt-72" />
      </div>
    </div>
  );
}

export default Home;
