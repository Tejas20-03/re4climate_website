import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Maintenance from "./components/Maintenance/Maintenance";
import SideContact from "./components/SideContact/SideContact";
import Chatbot from "./components/Chatbot/Chatbot";
import Hero from "./components/Hero/Hero";
import HNavbar from "./components/Navbar/Navbar";
import ServicesSection from "./components/Services/Services";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader/PreLoader";
import AboutPage from "./components/AboutPage/About";
import Solar from "./components/SectorsPages/Solar/Solar";
import Wind from "./components/SectorsPages/Wind/Wind";
import HybridEnergy from "./components/SectorsPages/HybridEnergy/HybridEnergy";
import BESS from "./components/SectorsPages/BESS/BESS";
import GreenHydrogen from "./components/SectorsPages/GreenHydrogen/GreenHydrogen";
import Nearshore from "./components/SectorsPages/Nearshore/Nearshore";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  });
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <BrowserRouter>
          <HNavbar />
          <Routes>
            <Route
              element={
                <>
                  <Hero />
                  <About />
                  <ServicesSection />
                </>
              }
              path="/"
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/wind-energy" element={<Wind />}></Route>
            <Route path="/solar-energy" element={<Solar />}></Route>
            <Route path="/hybrid-energy" element={<HybridEnergy />}></Route>
            <Route path="/bess" element={<BESS />}></Route>
            <Route path="/green-hydrogen" element={<GreenHydrogen />}></Route>
            <Route path="/nearshore-offshore" element={<Nearshore />}></Route>
            <Route path="/service" element={<Maintenance />}></Route>
            <Route path="/careers" element={<Maintenance />}></Route>
          </Routes>
          <SideContact />
          <Chatbot />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
