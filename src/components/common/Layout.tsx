import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../layouts/navbar/Header";
import Footer from "../layouts/footer/Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
