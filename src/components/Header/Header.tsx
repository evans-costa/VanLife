import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logog.png";
import NavBar from "../Navbar/NavBar";
import { UserCircle } from "../../ui/UserCircle";
import { useAuth } from "../../hooks/useAuth";
import { SignIn } from "../../ui/SignIn";

export default function Header() {
  const { isAuthenticated } = useAuth();

  const navLinks = [
    {
      id: 1,
      name: "Host",
      path: "host",
    },
    {
      id: 2,
      name: "About",
      path: "about",
    },
    {
      id: 3,
      name: "Vans",
      path: "vans",
    },
    {
      id: 4,
      name: isAuthenticated ? <UserCircle /> : <SignIn />,
      path: isAuthenticated ? "/host" : "/login",
    },
  ];

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
    <header>
      <Link to="/">
        <img src={logo} alt="logo VanLife" width={"145px"} />
      </Link>
      <NavBar>{navElements}</NavBar>
    </header>
  );
}
