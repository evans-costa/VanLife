import "./HostVansDetail.css";
import { useEffect, useState } from "react";
import { Van } from "../../../types/api-responses";
import { Link, NavLink, useParams } from "react-router-dom";
import { ArrowLeft } from "../../../ui/ArrowLeft";

export default function VansHostDetail() {
  const [van, setVan] = useState<Van>();
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
      <Link to="/host/vans" className="van-return-link">
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
              to={`/host/vans/${van.id}`}
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={`/host/vans/${van.id}/pricing`}
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={`/host/vans/${van.id}/photos`}
            >
              Photos
            </NavLink>
          </nav>
          <div className="host-van-detail-more">
            <p className="more-name">
              Name: <span>{van.name}</span>
            </p>
            <p className="more-category">
              Category: <span>{van.type}</span>
            </p>
            <p className="more-description">
              Description: <span>{van.description}</span>
            </p>
            <p className="more-visibility">
              Visibility: <span>Public</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
