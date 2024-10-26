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

const seoConfig = {
  '/': {
    title: 'RE4Climate | Renewable Energy Solutions',
    description: 'RE4Climate offers expert renewable energy consulting services for solar, wind, hybrid energy, and more. Sustainable solutions for a greener future.'
  },
  '/about': {
    title: 'About RE4Climate | Leading Renewable Energy Consultants',
    description: 'Learn about RE4Climate\'s mission, expertise and commitment to sustainable energy solutions. Trusted renewable energy consultants with global experience.'
  },
  '/contact': {
    title: 'Contact RE4Climate | Get Renewable Energy Consulting',
    description: 'Connect with RE4Climate for expert renewable energy consulting services. Reach out for solar, wind, and sustainable energy solutions.'
  },
  '/wind-energy': {
    title: 'Wind Energy Solutions & Consulting | RE4Climate',
    description: 'Expert wind energy consulting services including feasibility studies, technical assessments, and project management for wind farms worldwide.'
  },
  '/solar-energy': {
    title: 'Solar Energy Solutions & Consulting | RE4Climate',
    description: 'Comprehensive solar energy solutions including solar PV consulting, technical due diligence, and end-to-end project management services.'
  },
  '/hybrid-energy': {
    title: 'Hybrid Energy Systems & Solutions | RE4Climate',
    description: 'Innovative hybrid energy solutions combining solar, wind and storage technologies for optimal energy efficiency and reliability.'
  },
  '/bess': {
    title: 'Battery Energy Storage Systems (BESS) | RE4Climate',
    description: 'Advanced battery energy storage solutions for renewable integration, grid stability, and power management systems.'
  },
  '/green-hydrogen': {
    title: 'Green Hydrogen Solutions & Consulting | RE4Climate',
    description: 'Expert green hydrogen consulting and implementation services for clean energy production, storage and sustainable future.'
  },
  '/nearshore-offshore': {
    title: 'Nearshore & Offshore Wind Solutions | RE4Climate',
    description: 'Specialized consulting services for nearshore and offshore wind energy projects, from feasibility to implementation.'
  },
  '/services/re-consulting': {
    title: 'Renewable Energy Consulting Services | RE4Climate',
    description: 'Professional renewable energy consulting services helping businesses transition to sustainable energy solutions.'
  },
  '/services/project-execution': {
    title: 'Renewable Energy Project Execution | RE4Climate',
    description: 'End-to-end renewable energy project execution services ensuring efficient implementation and optimal results.'
  },
  '/services/energy-yield-assessment': {
    title: 'Energy Yield Assessment Services | RE4Climate',
    description: 'Accurate energy yield assessments for solar, wind and hybrid renewable energy projects.'
  },
  '/services/third-party-inspection': {
    title: 'Third Party Inspection Services | RE4Climate',
    description: 'Independent third-party inspection services for quality assurance in renewable energy projects.'
  },
  '/services/material-inspection': {
    title: 'Material Inspection Services | RE4Climate',
    description: 'Comprehensive material inspection services ensuring quality and compliance in renewable energy projects.'
  },
  '/services/construction-management': {
    title: 'Construction Management Services | RE4Climate',
    description: 'Expert construction management services for renewable energy projects, ensuring timely and quality execution.'
  },
  '/services/owners-engineer-services': {
    title: 'Owner\'s Engineer Services | RE4Climate',
    description: 'Professional owner\'s engineer services representing client interests throughout renewable energy project lifecycle.'
  },
  '/services/project-management-consultancy': {
    title: 'Project Management Consultancy | RE4Climate',
    description: 'Comprehensive project management consultancy services for renewable energy projects worldwide.'
  },
  '/services/detailed-project-report': {
    title: 'Detailed Project Reports | RE4Climate',
    description: 'In-depth project reports and analysis for renewable energy initiatives and developments.'
  },
  '/services/technical-due-digilence': {
    title: 'Technical Due Diligence Services | RE4Climate',
    description: 'Thorough technical due diligence services for renewable energy projects and investments.'
  },
  '/services/lenders-independent-engineer': {
    title: 'Lender\'s Independent Engineer Services | RE4Climate',
    description: 'Independent engineering services for lenders in renewable energy project financing.'
  },
  '/services/drone-inspection-services': {
    title: 'Drone Inspection Services | RE4Climate',
    description: 'Advanced drone inspection services for renewable energy installations and maintenance.'
  },
  '/services/solar-epc': {
    title: 'Solar EPC Services | RE4Climate',
    description: 'Complete solar EPC solutions including engineering, procurement, and construction services.'
  },
  '/services/project-development-support': {
    title: 'Project Development Support | RE4Climate',
    description: 'Comprehensive project development support services for renewable energy initiatives.'
  },
  '/projects': {
    title: 'Our Projects | RE4Climate Success Stories',
    description: 'Explore RE4Climate\'s portfolio of successful renewable energy projects and implementations worldwide.'
  }
};

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

  const currentSEO = seoConfig[location.pathname] || {
    title: 'RE4Climate | Renewable Energy Solutions',
    description: 'Professional renewable energy consulting services for sustainable energy solutions.'
  };

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
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://re4climate.com${location.pathname}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <link rel="canonical" href={`https://re4climate.com${location.pathname}`} />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
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
