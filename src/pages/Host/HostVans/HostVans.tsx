import "./HostVan.css";
import { useEffect, useState } from "react";
import { Van, VansApiResponse } from "../../../types/api-responses";
import { Link } from "react-router-dom";

export default function VansHost() {
  const [hostVans, setHostVans] = useState<Van[]>([]);

  useEffect(() => {
    async function fetchHostVans() {
      const response = await fetch("/api/host/vans");

      if (!response.ok) {
        throw new Error("Error while fetching host vans.");
      }

      const data = (await response.json()) as VansApiResponse;

      setHostVans(data.vans);
    }

    fetchHostVans().catch(console.error);
  }, []);

  return (
    <section className="host-vans-container">
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostVans.length > 0 ? (
          hostVans.map((hostVan) => (
            <Link
              className="host-van-link-wrapper"
              to={`${hostVan.id}`}
              key={hostVan.id}
            >
              <div className="host-van-card">
                <img
                  className="host-van-image"
                  src={hostVan.imageUrl}
                  alt={hostVan.description}
                />
                <div className="host-van-info">
                  <h2 className="host-van-name">{hostVan.name}</h2>
                  <h3 className="host-van-price">${hostVan.price}/day</h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
