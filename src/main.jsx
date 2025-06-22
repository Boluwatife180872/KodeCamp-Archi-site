import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HeroSection from "./components/Hero.jsx";
import AboutSection from "./components/About.jsx";
import MissionSection from "./components/Mission.jsx";
import Gallery from "./PhotoGallery.jsx";
import Projects from "./MainProjects.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutSection /> },
  { path: "/mission", element: <MissionSection /> },
  { path: "/gallery", element: <Gallery /> },
  {path: "/projects", element: <Projects /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
