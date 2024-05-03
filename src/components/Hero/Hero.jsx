import React, { useEffect, useState } from "react";
import "./hero.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image5.jpg";
import image4 from "../../assets/image7.jpeg";
import image5 from "../../assets/image6.png";

const images = [image1, image2, image3, image4, image5];
const data = [
  "Wind Energy",
  "Solar Energy",
  "Hybrid Energy",
  "Green Hydrogen",
  "BESS",
];
const content = [
  "This sustainable energy solution reduces reliance on fossil fuels and emits no greenhouse gases during operation, helping to mitigate climate change.",
  "This abundant and sustainable energy source significantly reduces carbon footprints and promotes energy independence by providing a clean, inexhaustible supply of power.",
  "By integrating various technologies, these systems can provide reliable power while reducing environmental impact and enhancing energy security.",
  "This sustainable fuel offers a versatile solution for decarbonizing various sectors, including transportation and industry, and plays a crucial role in advancing the global transition to clean energy.",
  "These systems enable utilities to balance supply and demand, provide backup power, and support the integration of intermittent renewable energy sources like solar and wind.",
];

const Hero = () => {
  const [itemActive, setItemActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleClickNext();
    }, 7000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleClickNext = () => {
    setItemActive((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  return (
    <div className="slider">
      <div className="list">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${index === itemActive ? "active" : ""}`}
          >
            <img alt="backg" src={image} />
            <div className="content">
              <p>Sector</p>
              <h2>{data[index]}</h2>
              <p>{content[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${index === itemActive ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img alt="thumbnail" src={image} />
            <div className="content">{data[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
