import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Matches = () => {
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
				const rd = response.data;
				setData(rd);
				localStorage.setItem("myData", JSON.stringify(response.data));

				const league = rd.typeMatches[1];
				const seriesMatches = league.seriesMatches[0];
				setMatches(seriesMatches.seriesAdWrapper.matches);
				console.log(matches);
			} catch (error) {
				console.error(error);
			}
		};

		fetchMatches();
	}, []);

	return (
		<div className="container mt-[50px] App1">
			<div className="flex flex-col gap-6  ">
				{matches.map((match) => (
					<div
						key={match.matchInfo.matchId}
						className="flex flex-row gap-3 justify-around border border-[#b48325] mx-[120px] rounded-3xl p-6 bg-[#06002E]"
					>
						<div className="flex justify-center items-center">
							<h1 className="text-white">
								{match.matchInfo.team1.teamName}
							</h1>
						</div>
						<div className="text-white">
							<h1 className="font-bold text-[20px]">
								Indian Premier League T20
							</h1>
							<center className="m-3 gap-4 p-2 ">
								<h4 className="font-light">
									{match.matchInfo.matchDesc}
								</h4>
								<h2 className="font-semibold mx-auto pb-3">
									Vs
								</h2>
								<h4 className="font-light">
									Starts at 06:30 PM
								</h4>
							</center>

							<center className="m-4">
								{" "}
								<Link
									to={`/createTeam/${match.matchInfo.matchId}`}
								>
									{" "}
									<button className="py-1.5 border border-[#fff] text-[#b48325] rounded-3xl px-4 hover:bg-[#b48325] hover:text-[#fff] ">
										Create Team
									</button>
								</Link>
							</center>
						</div>
						<div className="flex justify-center items-center">
							{/* <img
                className="w-[60px] h-12 object-contain"
                src={mat.img2}
                alt="team logo"
              /> */}

							<h1 className="text-white">
								{match.matchInfo.team2.teamName}
							</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Matches;
