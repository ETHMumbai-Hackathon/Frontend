import Matches from "../utils/data.js";
import MatchCard from "../components/MatchCard.jsx";
function Schedule() {
  console.log(Matches);
  return (
    <div className="grid lg:grid-cols-1 w-full gap-10 py-12 cursor-pointer">
      {Matches.map((match, i) => {
        return <MatchCard match={match} key={i} />;
      })}
    </div>
  );
}

export default Schedule;
