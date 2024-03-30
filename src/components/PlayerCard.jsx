import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import playersData from "../utils/players";

function PlayerCard() {
  const [players, setPlayers] = useState(playersData);
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const { team1, team2 } = useParams();

  useEffect(() => {
    // Filter players for team1
    const filteredTeam1Players = players.map(
      (player) => player.teamname === team1
    );
    setTeam1Players(filteredTeam1Players);

    // Filter players for team2
    const filteredTeam2Players = players.map(
      (player) => player.teamname === team2
    );
    setTeam2Players(filteredTeam2Players);
  }, [team1, team2]);

  console.log(team1Players);
  console.log(team2Players);

  return (
    <div>
      <h2>{team1} Players:</h2>
      <ul>
        {team1Players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
      <h2>{team2} Players:</h2>
      <ul>
        {team2Players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerCard;
