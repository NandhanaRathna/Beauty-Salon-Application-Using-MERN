import { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully 💜");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      alert("Failed to send message ❌");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay">
        <div className="contact-container">

          <div className="contact-form-box">
            <h2>Get in Touch</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info-box">
            <h2>Contact Info</h2>

            <p><strong>📍 Address:</strong><br />123, Kalavasal Madurai.</p>

            <p><strong>📞 Phone:</strong><br />+91 9723452468</p>

            <p><strong>✉️ Email:</strong><br />nandisbeauty@gmail.com</p>

            <p><strong>⏰ Timings:</strong><br />9:00 AM – 8:00 PM</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
