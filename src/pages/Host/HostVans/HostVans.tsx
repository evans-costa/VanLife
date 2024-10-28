import "./HostVan.css";
import { useEffect, useState } from "react";
import { Van, VansApiResponse } from "../../../types/api-responses";
import HostCardVan from "../../../components/HostCardVan/HostCardVan";

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
            <HostCardVan key={hostVan.id} {...hostVan} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
