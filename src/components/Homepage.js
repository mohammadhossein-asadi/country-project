import { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [countryData, setCountryData] = useState();

  // Fetch data
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountryData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <CountryCard countriesCard={countryData} />
    </>
  );
};

export default Homepage;
