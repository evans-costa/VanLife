import Tag from "../../ui/Tag/Tag";
import "./CardVan.css";

interface IProps {
  imgUrl: string;
  name: string;
  price: number;
  description: string;
  type: string;
}

export default function CardVan({
  imgUrl,
  name,
  price,
  description,
  type,
}: IProps) {
  return (
    <div className="van-card">
      <img src={imgUrl} alt={description} className="van-card-image" />
      <div className="van-card-content">
        <div className="van-card-info">
          <h3 className="van-card-title">{name}</h3>
          <Tag type={type}>{type}</Tag>
        </div>
        <p className="van-card-price">
          ${price}
          <span>/day</span>
        </p>
      </div>
    </div>
  );
}
