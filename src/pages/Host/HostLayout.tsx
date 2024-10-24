import "./Dashboard.css";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="nav-host">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
