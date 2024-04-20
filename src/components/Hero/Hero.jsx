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

const Hero = () => {
  const [itemActive, setItemActive] = useState(0);
  const [refreshInterval, setRefreshInterval] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleClickNext();
    }, 7000);
    setRefreshInterval(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  const handleClickNext = () => {
    setItemActive((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClickPrev = () => {
    setItemActive(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
            <img alt="image" src={image} />
            <div className="content">
              <p>Design</p>
              <h2>{data[index]}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus est, facilis exercitationem hic dolorum quam
                similique.
              </p>
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
            <img alt="image" src={image} />
            <div className="content" key={index}>
              {data[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
