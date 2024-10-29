import "./HostCardVan.css";
import { Link } from "react-router-dom";
import { Van } from "../../types/api-responses";

export default function HostCardVan({ ...van }: Van) {
  return (
    <Link className="host-van-link-wrapper" to={van.id}>
      <div className="host-van-card">
        <img
          className="host-van-image"
          src={van.imageUrl}
          alt={van.description}
        />
        <div className="host-van-info">
          <h2 className="host-van-name">{van.name}</h2>
          <h3 className="host-van-price">${van.price}/day</h3>
        </div>
      </div>
    </Link>
  );
}
