import aboutBackground from "../../assets/about-background.png";
import "./index.css";

export default function About() {
  return (
    <section className="about">
      <img src={aboutBackground} alt="A man seated on a top of a van" />
      <div className="about-content">
        <h2 className="about-title">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="about-description">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. <br />
          (Hitch costs extra 😉) <br /> <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-explore">
          <h3 className="about-explore-title">
            Your destination is waiting. <br />
            Your van is ready.
          </h3>
          <button className="about-explore-button">Explore our vans</button>
        </div>
      </div>
    </section>
  );
}
