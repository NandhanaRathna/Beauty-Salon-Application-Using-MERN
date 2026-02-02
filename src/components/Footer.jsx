import "./Footer.css";
import logo from "../assets/log.png";

const Footer = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h3>Nandi's Beauty Parlour</h3>
          <p>
            Enhancing your beauty with professional care and love.
          </p>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("gallery")}>Gallery</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>

        <div className="footer-box">
          <h4>Contact</h4>
          <p>📍 Nandi’s Salon, Madurai</p>
          <p>📞 +91 9723452468</p>
          <p>📧 nandisalon@gmail.com</p>
          <p>⏰ 9:00 AM – 8:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Nandi's Beauty Parlour. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
