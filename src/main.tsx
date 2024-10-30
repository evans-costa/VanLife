import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.tsx";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start({ onUnhandledRequest: "bypass" });
}

await enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
});
