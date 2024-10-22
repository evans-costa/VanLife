import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="hero-description">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="hero-button">
          Find your van
        </Link>
      </div>
    </div>
  );
}
