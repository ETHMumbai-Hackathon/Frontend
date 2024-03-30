/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MatchCard = ({ match }) => {
  const date = match?.matchInfo?.matchDesc;
  const team1 = match?.matchInfo.team1?.teamName;
  const team2 = match?.matchInfo.team2?.teamName;
  const venue = match?.matchInfo.venueInfo.ground;
  const city = match?.matchInfo.venueInfo.city;
  const time = match?.matchInfo.status;

  console.log(match);
  return (
    <div className="flex flex-col items-center mx-10">
      <div className="flex w-3/4 flex-col gap-6 cursor-pointer">
        <div className="flex flex-col items-center bg-white w-full mx-5 h-80 rounded-xl shadow-md">
          <div className="flex flex-col items-start justify-center w-full h-12 bg-green-500 rounded-t-lg">
            {/* <h1 className="text-white text-lg mx-5 font-bold">
							{date}
						</h1> */}
          </div>
          <div className="flex flex-col items-center py-5 w-full h-full bg-gray-200">
            <div className="flex gap-5 justify-center  items-center mt-5 text-2xl">
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className=" font-semibold text-zinc-700">{team1}</h1>
                <img
                  className="w-36"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn3plcgt5OnAx_VelXAj9Z8TWBiqg6B-xgCJ__kuFeXr1ClntuhvVu0IugURU6TfyHk9qUuECEpos1E5ayEmx0fAupMIvNLQnLOwavDhBYxkIwvRv9cmm7_qHZmlcSwr3Un-hJpy92AooR9Qn77PUcr4yRgAORYwoTBjTYOmyYlHbZ0nDyaL3HWqUk/w400-h330/Original%20Chennai%20Super%20Fun%20Logo%20PNG%20-%20SVG%20File%20Download%20Free%20Download.png"
                />
              </div>
              <h1 className=" font-bold text-zinc-700 text-4xl">vs</h1>
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className=" font-semibold text-zinc-700">{team2}</h1>
                <img
                  className="w-36"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn3plcgt5OnAx_VelXAj9Z8TWBiqg6B-xgCJ__kuFeXr1ClntuhvVu0IugURU6TfyHk9qUuECEpos1E5ayEmx0fAupMIvNLQnLOwavDhBYxkIwvRv9cmm7_qHZmlcSwr3Un-hJpy92AooR9Qn77PUcr4yRgAORYwoTBjTYOmyYlHbZ0nDyaL3HWqUk/w400-h330/Original%20Chennai%20Super%20Fun%20Logo%20PNG%20-%20SVG%20File%20Download%20Free%20Download.png"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mt-10">
              <p className="text-lg">
                {venue} {" , "} {city}
              </p>
              <h1>{time}</h1>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={`/createTeam/${match.matchInfo.matchId}`}
        className="bg-green-500 text-white py-2 px-4 mt-4"
      >
        <button>Play Now</button>
      </Link>
    </div>
  );
};

export default MatchCard;
