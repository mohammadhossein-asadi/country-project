import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountrieDetail from "./components/CountrieDetail";
import Notfound from "./components/Notfound";
import Header from "../src/components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CountrieDetail/:name" element={<CountrieDetail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
