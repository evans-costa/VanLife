import { useVan } from "../../../../hooks/useVan";

export default function HostVanInfo() {
  const { van } = useVan();

  return (
    <>
      {van && (
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
      )}
    </>
  );
}
