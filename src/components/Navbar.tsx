import { Link } from "react-router-dom";
import logo from "../assets/logog.png";

export default function Navbar() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo VanLife" width={"145px"} />
      </Link>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </>
  );
}
