import React, { useEffect, useState } from "react";
import bgVideo from "../../assets/Scaling.mp4";
import "./style.css";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState(null)

  useEffect(() => {
    import("../../assets/Scaling.mp4").then(module => {
      setVideoSrc(module.default)
    })
  }, [])

  const handleVideoLoad = () => setIsLoading(false)

  return (
    <div className="hero-video">
      {isLoading && (
        <div className="skeleton-loader">
          <div className="skeleton-animation"></div>
        </div>
      )}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          style={{ opacity: isLoading ? 0 : 1 }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Hero;
