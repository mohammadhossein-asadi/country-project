import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountriesCard = ({ countriesData }) => {
  const [search, setSearch] = useState("");
  const searchText = (e) => {
    setSearch(e.target.value);
  };
  let dataSearch = countriesData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });
  const [filterParam, setFilterParam] = useState(["All"]);
  return (
    <>
      <div className="nav">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={searchText.bind(this)}
          />
        </div>
        <div className="select-box">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
          >
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="container">
        {countriesData &&
          dataSearch.map((data, index) => {
            const { flags, name, population, region, capital } = data;
            return (
              <Link
                key={index}
                to={`/CountrieDetail/${name.common}`}
                state={data}
              >
                <div className="card">
                  <img src={flags.png} alt={name.common} />
                  <h3>{name.common}</h3>
                  <p>
                    Population: <span>{population}</span>
                  </p>
                  <p>
                    Region: <span>{region}</span>
                  </p>
                  <p>
                    Capital: <span>{capital}</span>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default CountriesCard;
