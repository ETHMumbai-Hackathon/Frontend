import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import { Wagmiconfig } from "./components/wagmi-config";

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
						path="/game"
						element={
							<h1 className="text-white">
								this is the loans page
							</h1>
						}
					/>
				</Routes>
			</BrowserRouter>
		</Wagmiconfig>
	);
}

export default App;
