import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../layouts/navbar/Header";
import Footer from "../layouts/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Layout() {
  const location = useLocation();
  useScrollReveal();

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
      <Toaster />
    </div>
  );
}
