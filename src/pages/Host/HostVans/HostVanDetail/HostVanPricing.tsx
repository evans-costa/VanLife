import { useVan } from "../../../../hooks/useVan";

const priceStyle = {
  fontSize: "24px",
  fontWeight: "500",
};

const spanStyle = {
  fontSize: "16px",
  color: "#4D4D4D",
};

export default function HostVanPricing() {
  const { van } = useVan();

  return (
    <h1 style={priceStyle}>
      ${van?.price.toFixed(2)}
      <span style={spanStyle}>/day</span>
    </h1>
  );
}
