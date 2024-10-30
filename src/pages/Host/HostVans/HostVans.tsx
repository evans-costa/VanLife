import "./HostVan.css";
import { useEffect, useState } from "react";
import { Van, VansApiResponse } from "../../../types/api-responses";
import HostCardVan from "../../../components/HostCardVan/HostCardVan";

export default function VansHost() {
  const [hostVans, setHostVans] = useState<Van[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchHostVans() {
      setLoading(true);

      try {
        const response = await fetch("/api/host/vans");

        if (!response.ok) {
          throw new Error("Error while fetching host vans.");
        }

        const data = (await response.json()) as VansApiResponse;
        setHostVans(data.vans);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    void fetchHostVans();
  }, []);

  if (loading) {
    return <h1 aria-live="polite">Loading...</h1>;
  }

  if (error) {
    return <h1 aria-live="assertive">{error}</h1>;
  }

  return (
    <section className="host-vans-container">
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostVans.map((hostVan) => (
          <HostCardVan key={hostVan.id} {...hostVan} />
        ))}
      </div>
    </section>
  );
}
