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

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <>
                <Hero />
                <Feature />
                <section id="about">
                  <About />
                </section>
                <Services />
              </>
            }
            path="/"
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
