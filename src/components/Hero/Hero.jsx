import React from "react";
import bgVideo from "../../assets/Scaling.mp4";
import "./style.css";

const Hero = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
