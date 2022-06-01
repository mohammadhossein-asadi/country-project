import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const CountryCard = ({ countriesCard }) => {
  return (
    <>
      <div className="container">
        {countriesCard?.map((data, index) => (
          <Link key={index} to="/">
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
