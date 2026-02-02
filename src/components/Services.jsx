import "./Services.css";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const servicesData = [
  {
    id: 1,
    title: "Bridal Makeup Package",
    price: 15000,
    includes: [
      "HD Bridal Makeup",
      "Hair Styling",
      "Saree Draping",
      "Eye Lashes",
      "Basic Facial"
    ]
  },
  {
    id: 2,
    title: "Party Makeup Package",
    price: 5000,
    includes: [
      "Party Makeup",
      "Hair Styling",
      "Eye Makeup",
      "Lip Touchup"
    ]
  },
  {
    id: 3,
    title: "Pre-Bridal Package",
    price: 12000,
    includes: [
      "Full Body Wax",
      "Facial & Cleanup",
      "Hair Spa",
      "Threading",
      "Bleaching"
    ]
  }
];

const Services = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");

  const handleBookNow = (service) => {
    if (!user) {
      navigate("/auth"); 
    } else {
      setSelectedService(service);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setName("");
    setMobile("");
    setDate("");
  };

  const confirmBooking = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/bookings/create",
        {
          serviceName: selectedService.title,
          price: selectedService.price,
          mobile,
          date
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      alert("🎉 Booking Confirmed!");
      closeModal();
    } catch (error) {
      alert("❌ Booking Failed");
    }
  };

  return (
    <>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <p className="subtitle">Choose the perfect package for you</p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>

              <p className="price">
                ₹ {service.price.toLocaleString("en-IN")}
              </p>

              <ul>
                {service.includes.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>

              <button
                className="book-btn"
                onClick={() => handleBookNow(service)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {showModal && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedService.title}</h3>

            <p className="modal-price">
              ₹ {selectedService.price.toLocaleString("en-IN")}
            </p>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button className="confirm-btn" onClick={confirmBooking}>
              Confirm Booking
            </button>

            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
