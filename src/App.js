import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader/PreLoader";
import HNavbar from "./components/Navbar/Navbar";
import SideContact from "./components/SideContact/SideContact";
import Chatbot from "./components/Chatbot/Chatbot";
import Footer from "./components/Footer/Footer";

import { Helmet } from 'react-helmet'

// Import page components
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/About";
import Contact from "./pages/Contact/Contact";
import Maintenance from "./pages/Maintenance/Maintenance";

// Import sector pages
import Solar from "./components/SectorsPages/Solar/Solar";
import Wind from "./components/SectorsPages/Wind/Wind";
import HybridEnergy from "./components/SectorsPages/HybridEnergy/HybridEnergy";
import BESS from "./components/SectorsPages/BESS/BESS";
import GreenHydrogen from "./components/SectorsPages/GreenHydrogen/GreenHydrogen";
import Nearshore from "./components/SectorsPages/Nearshore/Nearshore";
import REConsulting from "./components/Services/REConsulting/REConsulting";
import { ProjectExecution } from "./components/Services/ProjectExecution/ProjectExecution";
import Projects from "./pages/Projects/Projects";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Simulate loading time
  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location]);

  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <Contact /> },
    { path: "/wind-energy", element: <Wind /> },
    { path: "/solar-energy", element: <Solar /> },
    { path: "/hybrid-energy", element: <HybridEnergy /> },
    { path: "/bess", element: <BESS /> },
    { path: "/green-hydrogen", element: <GreenHydrogen /> },
    { path: "/nearshore-offshore", element: <Nearshore /> },
    { path: "/services/re-consulting", element: <REConsulting /> },
    { path: "/services/project-execution", element: <ProjectExecution /> },
    { path: "/careers", element: <Maintenance /> },
    { path: "/projects", element: <Projects /> },
  ];

  if (loading && location.pathname === '/') {
    return <PreLoader />;
  }

  return (
    <>
      <Helmet>
        <title>RE4Climate | Renewable Energy Solutions</title>
        <meta name="description" content="RE4Climate offers expert renewable energy consulting services for solar, wind, hybrid energy, and more. Sustainable solutions for a greener future." />
      </Helmet>
      <HNavbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <SideContact />
      <Chatbot />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App;
