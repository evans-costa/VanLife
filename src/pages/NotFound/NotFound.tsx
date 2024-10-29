import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found-container">
      <h1 className="not-found-title">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/" className="not-found-button">
        Return to home
      </Link>
    </section>
  );
}
