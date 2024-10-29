import { ReactNode } from "react";
import "./Tag.css";

interface IProps {
  type?: string;
  children: ReactNode;
}

export default function Tag({ type = "base", children }: IProps) {
  return <div className={`van-card-type ${type}`}>{children}</div>;
}
