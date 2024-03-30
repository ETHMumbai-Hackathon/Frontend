import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import { Wagmiconfig } from "./components/wagmi-config";
import Schedule from "./Pages/Schedule";
import PlayerCard from "./components/PlayerCard";
import Matches from "./Pages/Matches";

function App() {
	return (
		<Wagmiconfig>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
					<Route
						path="/schedule"
						element={
							<Layout>
								<Schedule />
							</Layout>
						}
					/>
					<Route
						path="/players/:team1/:team2"
						element={
							<Layout>
								<PlayerCard />
							</Layout>
						}
					/>
					<Route
						path="/matches"
						element={
							<Layout>
								<Matches />
							</Layout>
						}
					/>
				</Routes>
			</BrowserRouter>
		</Wagmiconfig>
	);
}

export default App;
