import { useVan } from "../../../../hooks/useVan";

const style = {
  borderRadius: "5px",
  width: "100px",
};

export default function HostVanPhotos() {
  const { van } = useVan();

  return (
    <div>
      <img src={van?.imageUrl} alt={van?.description} style={style} />
    </div>
  );
}
