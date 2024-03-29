import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import Home from "./components/Home";

function App() {
  return (
    <div>
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
            element={<h1 className="text-white">this is the loans page</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
