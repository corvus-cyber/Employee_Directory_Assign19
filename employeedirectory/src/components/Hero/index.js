import React from "react";
import "./style.css";
import backgroundImage from "../images/office.jpg"

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    {props.children}
    </div>
  );
}

export default Hero;
