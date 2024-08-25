import React, { useEffect } from "react";
import "./preloader.css";
import logo from "../../assets/logo.png";
import { preLoaderAnim } from "../../animations";


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        
          <img src={logo} alt="logo" className="preloader-logo" />
      </div>
    </div>
  );
}

export default PreLoader
