import "./Vans.css";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Van, VansApiResponse } from "../../types/api-responses";
import CardVan from "../../components/CardVan/CardVan";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState<Van[]>([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function fetchVans() {
      const response = await fetch("/api/vans");

      if (!response.ok) {
        throw new Error("Error while fetching vans");
      }

      const data = (await response.json()) as VansApiResponse;

      setVans(data.vans);
    }

    fetchVans().catch(console.error);
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <Link
      to={van.id}
      key={van.id}
      state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
    >
      <CardVan
        imgUrl={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
      />
    </Link>
  ));

  function handleSearchParams(
    key: string,
    value: string | null,
  ): URLSearchParams | null {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });

    return null;
  }

  return (
    <section className="vans-section">
      <h2 className="vans-section-title">Explore our van options</h2>
      <div className="van-list-filter-buttons">
        <button
          className={`filter-button simple ${typeFilter === "simple" ? "selected" : ""}`}
          onClick={() => handleSearchParams("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`filter-button luxury ${typeFilter === "luxury" ? "selected" : ""}`}
          onClick={() => handleSearchParams("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`filter-button rugged ${typeFilter === "rugged" ? "selected" : ""}`}
          onClick={() => handleSearchParams("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className="clear-filters"
            onClick={() => handleSearchParams("type", null)}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="vans-list">{vanElements}</div>
    </section>
  );
}
