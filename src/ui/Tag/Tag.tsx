import "./Tag.css";

interface IProps {
  type: string;
}

export default function Tag({ type }: IProps) {
  return <div className={`van-card-type ${type}`}>{type}</div>;
}
