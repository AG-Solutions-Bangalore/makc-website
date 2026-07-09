import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./modules/Home/pages/HomePage";
import HomeV2Page from "./modules/HomeV2/pages/HomeV2Page";

// New modules pages imports
import AutomationPage from "./modules/Automation/pages/AutomationPage";
import SecurityPage from "./modules/Security/pages/SecurityPage";
import LightingPage from "./modules/Lighting/pages/LightingPage";
import NetworkingPage from "./modules/Networking/pages/NetworkingPage";
import ContactPage from "./modules/Contact/pages/ContactPage";
import AboutPage from "./modules/About/pages/AboutPage";
import ServicePage from "./modules/Service/pages/ServicePage";
import BlogPage from "./modules/Blogs/pages/BlogPage";
import ExperiencePage from "./modules/Experience/pages/ExperiencePage";
import WhyUsPage from "./modules/WhyUs/pages/WhyUsPage";
import NotFound from "./components/common/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeV2Page />} />
        <Route path="/v1" element={<HomePage />} />

        {/* Solutions routes */}
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/lighting" element={<LightingPage />} />
        <Route path="/networking" element={<NetworkingPage />} />

        {/* Additional links routes */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
