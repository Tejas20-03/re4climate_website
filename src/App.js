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
import ConstructionManagement from "./components/Services/ConstructionManagement/page";
import DroneInspection from "./components/Services/DroneInspection/page";
import DetailedProjectReport from "./components/Services/DetailedProjectReport/page";
import EnergyYieldAssessment from "./components/Services/EnergyYieldAssessment/page";
import ThirdPartyInspection from "./components/Services/ThirdPartyInspection/page";
import MaterialInspection from "./components/Services/MaterialInspection/page";
import OwnersEngineer from "./components/Services/OwnersEngineer/page";
import ProjectManagement from "./components/Services/ProjectManagement/page";
import TechnicalDueDigilence from "./components/Services/TechnicalDueDiligence/page";
import LendersEngineer from "./components/Services/LendersEngineer/page";
import SolarEPC from "./components/Services/SolarEPC/page";
import ProjectDevelopment from "./components/Services/ProjectDevelopment/page";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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
    { path: "/services/energy-yield-assessment", element: <EnergyYieldAssessment /> },
    { path: "/services/third-party-inspection", element: <ThirdPartyInspection /> },
    { path: "/services/material-inspection", element: <MaterialInspection /> },
    { path: "/services/construction-management", element: <ConstructionManagement /> },
    { path: "/services/owners-engineer-services", element: <OwnersEngineer /> },
    { path: "/services/project-management-consultancy", element: <ProjectManagement /> },
    { path: "/services/detailed-project-report", element: <DetailedProjectReport /> },
    { path: "/services/technical-due-digilence", element: <TechnicalDueDigilence /> },
    { path: "/services/lenders-independent-engineer", element: <LendersEngineer /> },
    { path: "/services/drone-inspection-services", element: <DroneInspection /> },
    { path: "/services/solar-epc", element: <SolarEPC /> },
    { path: "/services/project-development-support", element: <ProjectDevelopment /> },
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
      <ScrollToTop />
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
