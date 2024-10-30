import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export default function AuthLayout() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated)
    return (
      <Navigate
        to="/login"
        state={{ message: "You must login first", from: location }}
        replace
      />
    );

  return <Outlet />;
}
