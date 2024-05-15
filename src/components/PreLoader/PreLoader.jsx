import React, { useEffect } from "react";
import "./preloader.css";
import logo from "../../assets/logo.png";
import { preLoaderAnim } from "../../animations";

export default function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Renewable Energy</span>
        <span>means</span>
        <span>
          <img src={logo} alt="logo" width="100px" />
        </span>
      </div>
    </div>
  );
}
