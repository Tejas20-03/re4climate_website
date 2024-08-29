import React from "react";
import "./style.css";
import solarImage from "../../assets/img-600x400-1.jpg";
import windImage from "../../assets/img-600x400-2.jpg";

function About() {
  return (
    <div className="re4climate-about">
      <h1 className="re4climate-about__title">About RE4Climate</h1>
      <div className="re4climate-about__content">
        <p className="re4climate-about__paragraph">
          RE4Climate is a leading renewable energy company dedicated to creating a sustainable future through innovative clean energy solutions. Our mission is to accelerate the global transition to renewable energy sources and combat climate change.
        </p>
        <div className="re4climate-about__image-container">
          <img src={solarImage} alt="Solar Energy" className="re4climate-about__image" />
          <img src={windImage} alt="Wind Energy" className="re4climate-about__image" />
        </div>
        <h2 className="re4climate-about__heading">Our Expertise</h2>
        <ul className="re4climate-about__list">
          <li className="re4climate-about__list-item">Solar Energy: Harnessing the power of the sun for a brighter tomorrow.</li>
          <li className="re4climate-about__list-item">Wind Energy: Capturing the strength of wind to generate clean electricity.</li>
          <li className="re4climate-about__list-item">Hybrid Energy Systems: Combining multiple renewable sources for optimal efficiency.</li>
        </ul>
        <h2 className="re4climate-about__heading">Our Commitment</h2>
        <p className="re4climate-about__paragraph">
          At RE4Climate, we are committed to:
        </p>
        <ul className="re4climate-about__list">
          <li className="re4climate-about__list-item">Reducing carbon emissions and fighting climate change</li>
          <li className="re4climate-about__list-item">Developing cutting-edge renewable energy technologies</li>
          <li className="re4climate-about__list-item">Empowering communities through sustainable energy solutions</li>
          <li className="re4climate-about__list-item">Collaborating with partners to drive global energy transformation</li>
        </ul>
        <p className="re4climate-about__paragraph">
          Join us in our journey towards a cleaner, greener, and more sustainable world. Together, we can make a difference for our planet and future generations.
        </p>
      </div>
    </div>
  );
}

export default About;
