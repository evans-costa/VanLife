import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Host Dashboard</h1>
      <Outlet />
    </div>
  );
}
