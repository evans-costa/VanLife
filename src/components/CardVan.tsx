import "./CardVan.css";

interface IProps {
  imgUrl: string;
  name: string;
  price: number;
  type: string;
}

export default function CardVan({ imgUrl, name, price, type }: IProps) {
  return (
    <div className="van-card">
      <img src={imgUrl} alt={`A ${name} van`} className="van-card-image" />
      <div className="van-card-content">
        <div className="van-card-info">
          <h3 className="van-card-title">{name}</h3>
          <div className={`van-card-type ${type}`}>{type}</div>
        </div>
        <p className="van-card-price">
          ${price}
          <span>/day</span>
        </p>
      </div>
    </div>
  );
}
