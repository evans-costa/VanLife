import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AuthLayout from "./AuthLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/VanDetail/VanDetail";
import HostLayout from "./pages/Host/HostLayout";
import Income from "./pages/Host/Income/Income";
import Reviews from "./pages/Host/Reviews/Reviews";
import Dashboard from "./pages/Host/Dashboard";
import VansHost from "./pages/Host/HostVans/HostVans";
import HostVansDetail from "./pages/Host/HostVans/HostVanDetail/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVans/HostVanDetail/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVans/HostVanDetail/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVans/HostVanDetail/HostVanPricing";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthLayout />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<VansHost />} />
              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
