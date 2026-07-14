import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../layouts/navbar/Header";
import Footer from "../layouts/footer/Footer";
import FooterV2 from "../layouts/footer/FooterV2";
import { Toaster } from "@/components/ui/sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
      <FooterV2 />
      <Toaster />
    </div>
  );
}
