import { Toaster } from "@/components/ui/sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, Suspense } from "react";
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
      {/* Skip to Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-bg-surface focus:text-accent-blue focus:px-4 focus:py-2 focus:border focus:border-border-main focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center bg-bg-main">
            <div className="w-8 h-8 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingActionGroup />
      <Toaster />
    </div>
  );
}
