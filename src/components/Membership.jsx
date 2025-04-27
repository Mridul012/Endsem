import React from "react";
import "./Membership.css";
import Navbar from "./Navbar";

export default function Membership() {
  return (
    <main className="membership-page">

      <section className="membership-hero-section">
        <div className="hero-content">
          <h1>Elite Membership Programs</h1>
          <p>Elevate your travel experience with exclusive benefits and unparalleled luxury</p>
          <a href="#tiers" className="explore-btn">
            Explore Memberships
          </a>
        </div>
      </section>


      <section id="tiers" className="membership-tiers">
        <h2>Select Your Membership Tier</h2>
        <p className="section-subtitle">Choose the level of luxury that suits your lifestyle</p>

        <div className="tier-cards">

          <div className="tier-card">
            <div className="tier-header">
              <h3>Silver</h3>
              <div className="price">
                $25,000<span>/year</span>
              </div>
            </div>
            <div className="tier-content">
              <ul className="benefits-list">
                <li>Access to light jets</li>
                <li>Priority booking (48h)</li>
                <li>Basic catering options</li>
                <li>Fixed hourly rates</li>
                <li>24/7 customer support</li>
                <li>Flexible scheduling</li>
              </ul>
              <button className="join-btn">Join Now</button>
            </div>
          </div>


          <div className="tier-card featured">
            <div className="tier-header">
              <div className="popular-badge">Most Popular</div>
              <h3>Gold</h3>
              <div className="price">
                $75,000<span>/year</span>
              </div>
            </div>
            <div className="tier-content">
              <ul className="benefits-list">
                <li>Access to all aircraft types</li>
                <li>Dedicated flight manager</li>
                <li>Premium catering options</li>
                <li>24h priority booking</li>
                <li>Flexible cancellation policy</li>
                <li>Complimentary upgrades</li>
                <li>Partner lounge access</li>
              </ul>
              <button className="join-btn">Join Now</button>
            </div>
          </div>


          <div className="tier-card">
            <div className="tier-header">
              <h3>Platinum</h3>
              <div className="price">
                $150,000<span>/year</span>
              </div>
            </div>
            <div className="tier-content">
              <ul className="benefits-list">
                <li>Global fleet access</li>
                <li>Personal concierge service</li>
                <li>Instant booking guarantee</li>
                <li>Luxury catering from renowned chefs</li>
                <li>Family membership benefits</li>
                <li>Exclusive events access</li>
                <li>Helicopter transfers</li>
                <li>Custom jet interiors</li>
              </ul>
              <button className="join-btn">Join Now</button>
            </div>
          </div>
        </div>
      </section>


      <section className="cta-section">
        <div className="cta-content">
          <h2>Experience True Freedom in the Skies</h2>
          <p>Our membership programs are designed to provide the ultimate private aviation experience</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </section>
    </main>
  );
}
