import React from "react";
import HomePng from "../assets/homepng.jpg";
function Home() {
	return (
		<div className="flex items-center h-screen mb-10">
			<div className="flex flex-col gap-3">
				<h1 className="text-lg lg:text-3xl text-green-500 font-bold">
					Welcome to the Core 11
				</h1>
				<p className="text-white text-xl max-w-[650px]">
					Experience the thrill of decentralized fantasy gaming with
					CORE11 - where strategy meets blockchain innovation for the
					ultimate fantasy league adventure!
				</p>
			</div>
			<div>
				<img src={HomePng} className="w-[600px]" />
			</div>
		</div>
	);
}

export default Home;
