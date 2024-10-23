import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardVan from "../../components/CardVan/CardVan";
import { Van, VansApiResponse } from "../../types/api-responses";
import "./Vans.css";

export default function Vans() {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect(() => {
    async function fetchVans() {
      const response = await fetch("/api/vans");

      const data = (await response.json()) as VansApiResponse;

      setVans(data.vans);
    }

    fetchVans().catch(console.error);
  }, []);

  return (
    <section className="vans-section">
      <h2 className="vans-section-title">Explore our van options</h2>
      <div className="vans-list">
        {vans.map((van) => (
          <Link to={`/vans/${van.id}`} key={van.id}>
            <CardVan
              imgUrl={van.imageUrl}
              name={van.name}
              price={van.price}
              type={van.type}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
