import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Maintenance from "./components/Maintenance/Maintenance";
import BackToTop from "./components/BackToTop/BackToTop";
import SideContact from "./components/SideContact/SideContact";
import Chatbot from "./components/Chatbot/Chatbot";
import Portfolio from "./components/Portfolio/Portfolio";
import Hero from "./components/Hero/Hero";
import UNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <UNavbar />
        <Routes>
          <Route
            element={
              <>
                {/* <Hero /> */}
                <Hero />
                <About />
                <Services />
                <Portfolio />
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
          {/* <Route path="/chatbot" element={<Chatbot/>}></Route> */}
        </Routes>
        <SideContact />
        <Chatbot />
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
