import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countryDetail/:r" element={<CountryDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
