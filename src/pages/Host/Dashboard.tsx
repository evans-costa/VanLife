import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div>
      <h1>Host Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </div>
  );
}
