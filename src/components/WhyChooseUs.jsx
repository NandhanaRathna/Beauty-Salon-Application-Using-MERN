import "./WhyChooseUs.css";
import { FaUserTie, FaSpa, FaSmile, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie />,
    title: "Expert Stylists",
    desc: "Certified professionals with years of experience"
  },
  {
    icon: <FaSpa />,
    title: "Premium Products",
    desc: "We use only top quality & branded cosmetics"
  },
  {
    icon: <FaSmile />,
    title: "Happy Clients",
    desc: "1000+ satisfied customers trust our services"
  },
  {
    icon: <FaClock />,
    title: "On Time Service",
    desc: "Fast & punctual appointments without delay"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <h2>Why Choose Us</h2>
      <p className="why-subtitle">
        Because your beauty deserves the best care 💜
      </p>

      <div className="why-grid">
        {features.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
