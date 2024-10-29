import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Van } from "../../types/api-responses";
import "./VanDetail.css";
import { ArrowLeft } from "../../ui/ArrowLeft";
import Tag from "../../ui/Tag/Tag";

export default function VanDetail() {
  const { id } = useParams();
  const location = useLocation();
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

  const locationState = location.state as { search: string; type: string };

  return (
    <section>
      <Link
        relative="path"
        to={`..${locationState.search}`}
        className="van-return-link"
      >
        <span>
          <ArrowLeft />
          {`Back to ${locationState.type ?? "all"} vans`}
        </span>
      </Link>
      {van && (
        <div className="van-detail-section">
          <img src={van.imageUrl} alt={van.description} />
          <div className="van-detail-info">
            <Tag type={van.type}>{van.type}</Tag>
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
        </div>
      )}
    </section>
  );
}
