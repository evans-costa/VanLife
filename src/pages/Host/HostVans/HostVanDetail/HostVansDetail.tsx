import "./HostVansDetail.css";
import { useEffect, useState } from "react";
import { Van } from "../../../../types/api-responses";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { ArrowLeft } from "../../../../ui/ArrowLeft";
import { ContextType } from "../../../../hooks/useVan";
import Tag from "../../../../ui/Tag/Tag";
import NavBar from "../../../../components/Navbar/NavBar";

const navLinks = [
  {
    id: 1,
    name: "Details",
    path: ".",
  },
  {
    id: 2,
    name: "Pricing",
    path: "pricing",
  },
  {
    id: 3,
    name: "Photos",
    path: "photos",
  },
];

export default function HostVansDetail() {
  const navElements = navLinks.map((item) => (
    <NavLink
      key={item.id}
      className={({ isActive }) => (isActive ? "active-link" : "")}
      end={item.path === "."}
      to={item.path}
    >
      {item.name}
    </NavLink>
  ));

  const [van, setVan] = useState<Van | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchVan() {
      setLoading(true);

      try {
        const response = await fetch(`/api/host/vans/${id}`);

        if (!response.ok) {
          throw new Error("Error while fetch van");
        }

        const data = (await response.json()) as Van;

        setVan(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    void fetchVan();
  }, [id]);

  if (loading) {
    return <h1 aria-live="polite">Loading...</h1>;
  }

  if (error) {
    return <h1 aria-live="assertive">{error}</h1>;
  }

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
              <Tag type={van.type}>{van.type}</Tag>
              <h2 className="host-van-detail-name">{van.name}</h2>
              <p className="host-van-detail-price">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
          </div>
          <NavBar>{navElements}</NavBar>
          <Outlet context={{ van } satisfies ContextType} />
        </div>
      )}
    </section>
  );
}
