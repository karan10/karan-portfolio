import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul className="nav-links">
      <li>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/work" end className={({ isActive }) => (isActive ? "active" : "")}>
          work
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" end className={({ isActive }) => (isActive ? "active" : "")}>
          projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/anime" end className={({ isActive }) => (isActive ? "active" : "")}>
          anime
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" end className={({ isActive }) => (isActive ? "active" : "")}>
          contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
