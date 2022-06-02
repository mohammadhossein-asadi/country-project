import { Link } from "react-router-dom";
const CountryCard = ({ countryData }) => {
  return (
    <>
      <div className="nav">
        <div className="searchbox">
          <input type="text" autoComplete="none" placeholder="Search" />
        </div>
        <div className="selectbox">
          <select name="selectbox" id="selectbox"></select>
        </div>
      </div>

      <div className="container">
        {countryData?.map((data, index) => (
          <Link
            key={index}
            to={`/countryDetail/${data.name.common}`}
            state={data}
          >
            <div className="card">
              <img src={data.flags.png} alt={data.name.common} />
              <h3>{data.name.common}</h3>
              <p>
                Population: <span>{data.population}</span>
              </p>
              <p>
                Region: <span>{data.region}</span>
              </p>
              <p>
                Capital: <span>{data.capital}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CountryCard;
