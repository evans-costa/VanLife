import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logog.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo VanLife" width={"145px"} />
      </Link>
      <nav className="nav-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
