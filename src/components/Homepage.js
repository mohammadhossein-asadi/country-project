import { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const Homepage = () => {
  const [countryData, setCountryData] = useState();

  // URL
  const url = "https://restcountries.com/v3.1/all";

  // Fetch data
  useEffect(() => {
    axios.get(url).then((res) => {
      setCountryData(res.data);
      console.log(res.data);
    });
  }, []);

  return <div></div>;
};

export default Homepage;
