import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>Where in the world?</h1>
      </Link>
      <h4>darkmode</h4>
    </div>
  );
};

export default Header;
