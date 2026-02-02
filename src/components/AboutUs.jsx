import "./AboutUs.css";
import aboutImg from "../assets/ski.jpg";
import bridimg from "../assets/brid.jpg";
import hair from "../assets/har.jpg";
import { FaRegSmileBeam, FaHeart, FaCrown } from "react-icons/fa"

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img className="abt" src={aboutImg} alt="About Beauty Salon" />
          <img className="brid" src={bridimg} alt="" />
          <img className="hair" src={hair} alt="" />
        </div>

        <div className="about-content">
          <h2>About Us</h2>
          <h3>Nandi's Beauty Salon</h3>

          <p>
            Nandi Beauty Salon is a professional beauty and bridal makeup studio
            providing premium services for women. We specialize in bridal
            makeup, hair styling, skincare, and beauty treatments.
          </p>

          <p>
            With experienced beauticians and high-quality products, we ensure
            every customer looks and feels confident and beautiful.
          </p>
        </div>

      </div>


      <div className="about-stats">
        <div className="stat">
          <FaCrown className="stat-icon" />
          <h4>10+</h4>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <FaHeart className="stat-icon" />
          <h4>500+</h4>
          <p>Happy Brides</p>
        </div>

        <div className="stat">
          <FaRegSmileBeam className="stat-icon" />
          <h4>100%</h4>
          <p>Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
