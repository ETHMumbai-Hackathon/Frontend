import { Link } from "react-router-dom";
const MatchCard = ({ match }) => {
  console.log(match);
  const { team1, team2, date, time, venue , image } = match;
  return (
    <div className="flex flex-col items-center mx-10">
      <Link to={`/match/${team1}vs${team2}`} className="flex w-full">
        <div className="flex flex-col items-center bg-white w-full mx-5 h-80 rounded-lg shadow-md">
          <div className="flex flex-col items-start justify-center w-full h-12 bg-green-500 rounded-t-lg">
            <h1 className="text-white text-lg mx-5 font-bold">{date}</h1>
          </div>
          <div className="flex flex-col items-center py-5 w-full h-full bg-gray-200">
            <div className="flex gap-5 justify-center  items-center mt-5 text-2xl">
              <h1 className=" font-semibold text-zinc-700">{team1}</h1>
              <h1 className=" font-bold text-zinc-700 text-4xl">vs</h1>
              <h1 className="font-semibold text-zinc-700">{team2}</h1>
              <img src="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mt-10">
              <p className="text-lg">{venue}</p>
              <h1>{time}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MatchCard;
