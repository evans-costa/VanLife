import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Van } from "../../types/api-responses";
import "./VanDetail.css";

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState<Van>();

  useEffect(() => {
    const fetchVan = async () => {
      const response = await fetch(`/api/vans/${id}`);

      if (!response.ok) {
        throw new Error("Error while fetching van");
      }

      const data = (await response.json()) as Van;

      setVan(data);
    };

    void fetchVan();
  }, [id]);

  return (
    <div className="van-detail-container">
      <Link to="/vans" className="van-return-link">
        Back to all vans
      </Link>
      {van && (
        <section className="van-detail-section">
          <img src={van.imageUrl} alt={van.description} />
          <div className="van-detail-info">
            <div className={`van-card-type ${van.type}`}>{van.type}</div>
            <h3 className="van-detail-title">{van.name}</h3>
            <p className="van-detail-price">
              ${van.price}
              <span>/day</span>
            </p>
            <p className="van-detail-description">{van.description}</p>
          </div>
          <Link to="" className="van-detail-button">
            Rent this van
          </Link>
        </section>
      )}
    </div>
  );
}
