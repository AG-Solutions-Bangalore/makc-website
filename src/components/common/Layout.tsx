import { Toaster } from "@/components/ui/sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/navbar/Header";
import FloatingActionGroup from "./FloatingActionGroup";

export default function Layout() {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActionGroup />
      <Toaster />
    </div>
  );
}
