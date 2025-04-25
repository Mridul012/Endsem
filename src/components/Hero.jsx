import React from "react";
import "./Hero.css";

import BookingShow from "../BookingShow"; 

export default function Hero() {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src="https://res.cloudinary.com/df1hzmai7/video/upload/v1745611441/privatejet_1__1_niixza.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1 className="hero-text">Fly Beyond Luxury</h1>
      </div>
  
    </section>


  );
}
