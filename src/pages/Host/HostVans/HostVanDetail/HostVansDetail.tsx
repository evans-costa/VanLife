import "./HostVansDetail.css";
import { useEffect, useState } from "react";
import { Van } from "../../../../types/api-responses";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { ArrowLeft } from "../../../../ui/ArrowLeft";
import { ContextType } from "../../../../hooks/useVan";

export default function HostVansDetail() {
  const [van, setVan] = useState<Van | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchVan() {
      const response = await fetch(`/api/host/vans/${id}`);

      if (!response.ok) {
        throw new Error("Error while fetch van");
      }

      const data = (await response.json()) as Van;

      setVan(data);
    }

    fetchVan().catch(console.error);
  }, [id]);

  return (
    <section>
      <Link relative="path" to=".." className="van-return-link">
        <span>
          <ArrowLeft />
          Back to all vans
        </span>
      </Link>

      {van && (
        <div className="host-van-detail-container">
          <div className="host-van-detail-info">
            <img src={van.imageUrl} alt={van.description} />
            <div>
              <div className={`van-card-type ${van.type}`}>{van.type}</div>
              <h2 className="host-van-detail-name">{van.name}</h2>
              <p className="host-van-detail-price">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
          </div>
          <nav className="nav-links">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van } satisfies ContextType} />
        </div>
      )}
    </section>
  );
}
