import { useEffect, useState } from "react";
import CardVan from "../../components/CardVan";
import "./Vans.css";

interface VansApiResponse {
  vans: Vans[];
}

interface Vans {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export default function Vans() {
  const [vans, setVans] = useState<Vans[]>([]);

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
          <CardVan
            key={van.id}
            imgUrl={van.imageUrl}
            name={van.name}
            price={van.price}
            type={van.type}
          />
        ))}
      </div>
    </section>
  );
}
