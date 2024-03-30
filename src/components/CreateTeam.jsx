import React from "react";
import Players from "./Players";
import { useParams } from "react-router-dom";
const CreateTeam = () => {
  const { match_id } = useParams();
  console.log(match_id);
  return (
    <div className="App1 h-full">
      <div>
        <h1 className="text-center text-green-400 underline text-[30px] font-extrabold py-4">
          Select your Team
        </h1>
      </div>
      <Players matchId={match_id} />
    </div>
  );
};

export default CreateTeam;
