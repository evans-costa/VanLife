import NavBar from "../../components/Navbar/NavBar";
import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    name: "Host",
    path: ".",
  },
  {
    id: 2,
    name: "Income",
    path: "income",
  },
  {
    id: 3,
    name: "Vans",
    path: "vans",
  },
  {
    id: 4,
    name: "Reviews",
    path: "reviews",
  },
];

export default function HostLayout() {
  const navElements = navLinks.map((item) => (
    <NavLink
      key={item.id}
      className={({ isActive }) => (isActive ? "active-link" : "")}
      end={item.path === "."}
      to={item.path}
    >
      {item.name}
    </NavLink>
  ));

  return (
    <>
      <NavBar type="dashboard">{navElements}</NavBar>
      <Outlet />
    </>
  );
}
