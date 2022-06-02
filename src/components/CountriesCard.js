import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountriesCard = ({ countriesData }) => {
  const [search, setSearch] = useState("");
  const [filterParam, setFilterParam] = useState("");

  return (
    <>
      <div className="nav">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="select-box">
          <select
            onChange={(e) => {
              const selected = e.target.value;
              setFilterParam(selected);
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
        {countriesData
          ?.filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.common.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((data, index) => {
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
