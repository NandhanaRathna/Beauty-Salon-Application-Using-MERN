import "./Gallery.css";
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";

const images = [
  { img: g1, name: "Bridal Makeup" },
  { img: g2, name: "Hair Cut" },
  { img: g3, name: "Facial Care" },

  { img: g6, name: "Mehndi Design" },
  { img: g4, name: "Manicure" },
  { img: g5, name: "Pedicure" }
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2>Our Gallery</h2>
      <p className="subtitle">Some of our beautiful works</p>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt={item.name} />
            <p className="service-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
