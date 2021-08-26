import { NavLink } from "react-router-dom";
import "../styles/navBar.scss";

export default function NavBar() {
  return (
    <header>
      <nav className="navBar">
        <NavLink to="/" exact className="navItem">
          <h3 className="navTitle">
            <span className="troy">Troy</span>
            <span className="johnson">Johnson</span>
          </h3>
        </NavLink>

        <div className="navMenu">
          <NavLink to="/" exact className="navItem" activeClassName="navActive">
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="navItem"
            activeClassName="navActive"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="navItem"
            activeClassName="navActive"
          >
            Contact
          </NavLink>
          <NavLink to="/resume" className="navItem" activeClassName="navActive">
            Resume
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
