import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./modules/Home/pages/HomePage";
import HomeV2Page from "./modules/HomeV2/pages/HomeV2Page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeV2Page />} />
        <Route path="/v1" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
