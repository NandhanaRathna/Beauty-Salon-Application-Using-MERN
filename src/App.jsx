import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Loader from "./components/Loader";
import bride from "./assets/bride.png";
import "./App.css";

function Home() {

  const scrollToServices = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <section className="hero" id="home">
        <div className="hero-left">
          <p className="welcome">Welcome to</p>
          <h1>
            Nandi's <br /> Salon
          </h1>
          <button className="btn purple" onClick={scrollToServices}>
            Our Services
          </button>
        </div>

        <div className="hero-right">
          <img src={bride} alt="Bride" />
        </div>
      </section>

      <div id="about">
        <AboutUs />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="whychoose">
        <WhyChooseUs />
      </div>

      <div id="contact">
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
