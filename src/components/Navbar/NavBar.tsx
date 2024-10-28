import "./NavBar.css";
import { ReactNode } from "react";

interface IProps {
  type?: string;
  children: ReactNode;
}

export default function NavBar({ type, children }: IProps) {
  return <nav className={`nav-bar ${type}`}>{children}</nav>;
}
