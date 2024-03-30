import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import { Wagmiconfig } from "./components/wagmi-config";
import Schedule from "./Pages/Schedule";

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
        </Routes>
      </BrowserRouter>
    </Wagmiconfig>
  );
}

export default App;
