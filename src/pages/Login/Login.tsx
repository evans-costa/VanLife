import "./Login.css";
import { FormEvent, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { LoginApiResponse, LoginApiRequest } from "../../types/api-responses";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState<LoginApiRequest>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<string>("idle");

  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location?.state as { message: string; from: Location };

  if (isAuthenticated) return <Navigate to="/host" replace />;

  function handleChange(event: FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    setLoginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    async function submitForm(): Promise<LoginApiResponse | null> {
      setLoading("submitting");
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify(loginFormData),
        });

        const data = (await response.json()) as LoginApiResponse;

        if (!response.ok) {
          throw new Error(data.message);
        }

        setError("");
        login();
        navigate(locationState.from?.pathname, { replace: true });
        return data;
      } catch (error) {
        setError((error as Error).message);
        return null;
      } finally {
        setLoading("idle");
      }
    }

    void submitForm();
  }

  return (
    <section className="login-container">
      {locationState?.message && (
        <h3 aria-live="assertive">{locationState.message}</h3>
      )}
      <h1 className="login-title">Sign in to your account</h1>
      {error && <h3 aria-live="assertive">{error}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email-login" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email-login"
          placeholder="Email address"
          autoComplete="email"
          onChange={handleChange}
          value={loginFormData.email}
        />
        <label htmlFor="password-login" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password-login"
          placeholder="Password"
          autoComplete="current-password"
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button disabled={loading === "submitting"}>
          {loading === "submitting" ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="create-account">
        Don&apos;t have an account? <Link to="/">Create one now</Link>
      </p>
    </section>
  );
}
