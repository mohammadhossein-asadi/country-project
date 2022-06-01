import { useLocation, useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={() => goToHome()}>Back</button>
    </>
  );
};

export default CountryDetails;
