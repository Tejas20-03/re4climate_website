import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Feature from "./components/Features/Feature";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Maintenance from "./components/Maintenance/Maintenance";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route
            element={
              <>
                <Hero />
                <Feature />
                <About />
                <Services />
              </>
            }
            path="/"
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/wind" element={<Maintenance />}></Route>
          <Route path="/solar" element={<Maintenance />}></Route>
          <Route path="/hybrid" element={<Maintenance />}></Route>
          <Route path="/bess" element={<Maintenance />}></Route>
          <Route path="/green" element={<Maintenance />}></Route>
          <Route path="/nearshore" element={<Maintenance />}></Route>
          <Route path="/service" element={<Maintenance />}></Route>
        </Routes>
        <BackToTop/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
