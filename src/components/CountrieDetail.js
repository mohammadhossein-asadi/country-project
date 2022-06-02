import React from "react";
import { useLocation } from "react-router-dom";

const CountrieDetail = () => {
  const state = useLocation();
  const lang = Object.keys(state.state.languages)[0];
  const key = Object.keys(state.state.name.nativeName)[0];

  return (
    <>
      <img src={state.state.flags.png} />
      <h1>{state.state.name.common}</h1>
      <h3>
        Native Name: <span>{state.state.name.nativeName[key].common}</span>
      </h3>
      <h3>
        Population: <span>{state.state.population}</span>
      </h3>

      <h3>
        Region: <span>{state.state.region}</span>
      </h3>
      <h3>
        Languages: <span>{state.state.languages[lang]}</span>
      </h3>
      <h3>
        Capital: <span>{state.state.capital}</span>
      </h3>
      <button>
        <a href={state.state.maps.googleMaps}>View on map</a>
      </button>
    </>
  );
};

export default CountrieDetail;
