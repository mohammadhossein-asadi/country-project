import React, { useEffect, useState } from "react";
import axios from "axios";
import CountriesCard from "./CountriesCard";

const Home = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setCountriesData(data.data));
  }, []);
  return (
    <>
      <CountriesCard countriesData={countriesData} />
    </>
  );
};

export default Home;
