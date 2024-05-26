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
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/wind" element={<Maintenance />}></Route>
            <Route path="/solar" element={<Maintenance />}></Route>
            <Route path="/hybrid" element={<Maintenance />}></Route>
            <Route path="/bess" element={<Maintenance />}></Route>
            <Route path="/green" element={<Maintenance />}></Route>
            <Route path="/nearshore" element={<Maintenance />}></Route>
            <Route path="/service" element={<Maintenance />}></Route>
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
