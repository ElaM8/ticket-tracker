import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <ul>
          <li>
            <Link to={"/home"}> HOME </Link>
          </li>
          <li>
            <Link to={"/ticket-tracker"}> TICKET TRACKER </Link>
          </li>
      </ul>
    </div>
  );
};

export default Nav;