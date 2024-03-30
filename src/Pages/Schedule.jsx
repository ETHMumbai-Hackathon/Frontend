// import Matches from "../utils/data.js";
import MatchCard from "../components/MatchCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
function Schedule() {

  const [matches, setMatches] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const storedData = JSON.parse(localStorage.getItem("myData"));
      console.log(storedData);
      if (storedData) {
        setData(storedData);
      }
      const options = {
        method: "GET",
        url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming",
        headers: {
          "X-RapidAPI-Key":
            "5efc7149d6mshd53daf388da93b3p1c2759jsn285736b3f877",
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      try {
        console.log("trying");
        const response = await axios.request(options);
        const jsondata = JSON.stringify(response.data);
        console.log(jsondata);
        const res = response.data;
        setData(res);
        localStorage.setItem("myData", JSON.stringify(response.data));

        const league = res.typeMatches[1];
        const seriesMatches = league.seriesMatches[0];
        setMatches(seriesMatches.seriesAdWrapper.matches);
        console.log(matches);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();
  }, []);

  console.log("matches: ", matches);
  console.log("data: ", data);

  return (
    <div className="grid lg:grid-cols-1 w-full gap-10 py-12">
      {matches.map((match, i) => {
        return <MatchCard match={match} key={i} data={data} />;
      })}
    </div>
  );
}

export default Schedule;
