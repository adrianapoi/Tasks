import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>AquaSoft</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/project">
            <i class="fas fa-archive"></i>
            Project
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu"></div>
    </nav>
  );
};

export default NavBar;
