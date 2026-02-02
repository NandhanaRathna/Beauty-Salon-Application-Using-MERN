import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";
import logo from "../assets/log.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo-box" onClick={() => scrollToSection("home")}>
        <img src={logo} alt="Logo" className="logo-img" />
        <h2 className="logo">Nandi's Beauty Parlour</h2>
      </div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => scrollToSection("services")}>Our Services</li>
        <li onClick={() => scrollToSection("gallery")}>Gallery</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>

        {user && (
          <>
            <li className="username">Hi, {user.name}</li>
            <li className="logout" onClick={logout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
