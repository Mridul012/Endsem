import React from "react";
import { Link } from "react-router-dom";
import { UserRound, Car, UtensilsCrossed, Plane, Ticket } from "lucide-react";
import "./Services.css";

export default function Services() {
  return (
    <main className="services-main">

      <section className="services-hero-section">
        <div className="services-hero-content">
          <h1>World-Class Services for Seamless Travel</h1>
          <p>Exceptional experiences tailored to your preferences at every step of your journey</p>
          <a href="#services" className="services-explore-btn">
            Discover Services
          </a>
        </div>
      </section>


      <section id="services" className="services-listing-section">
        <h2>Our Premium Services</h2>
        <p className="services-section-subtitle">Elevating your travel experience beyond expectations</p>

        <div className="services-cards">

          <div className="services-card">
            <div className="services-card-icon">
              <UserRound size={48} />
            </div>
            <h3>Concierge Service</h3>
            <p>
              Our dedicated concierge team provides personalized trip planning and luxury experience curation. From
              special occasions to business travel, we handle every detail with precision and care.
            </p>
          </div>


          <div className="services-card">
            <div className="services-card-icon">
              <Car size={48} />
            </div>
            <h3>Ground Transportation</h3>
            <p>
              Seamless transitions from air to ground with our premium transportation services. Enjoy limousine pickup,
              luxury car rentals, and discreet airport transfers coordinated with your flight schedule.
            </p>
          </div>


          <div className="services-card">
            <div className="services-card-icon">
              <UtensilsCrossed size={48} />
            </div>
            <h3>In-flight Catering</h3>
            <p>
              Indulge in gourmet dining at 40,000 feet with our bespoke catering services. Select from custom menu
              options prepared by world-class chefs, with dietary preferences and special requests accommodated.
            </p>
          </div>


          <div className="services-card">
            <div className="services-card-icon">
              <Plane size={48} />
            </div>
            <h3>VIP Airport Assistance</h3>
            <p>
              Bypass the ordinary with our fast-track immigration service and exclusive lounge access. Our airport
              representatives ensure swift, discreet handling of all formalities for a stress-free departure and
              arrival.
            </p>
          </div>


          <div className="services-card">
            <div className="services-card-icon">
              <Ticket size={48} />
            </div>
            <h3>Exclusive Event Access</h3>
            <p>
              Gain privileged access to the world's most coveted events. From front-row fashion shows to VIP sporting
              events, we secure premium tickets and private invitations to enhance your travel experience.
            </p>
          </div>
        </div>
      </section>


      <section className="services-contact-cta">
        <div className="services-cta-content">
          <h2>Tailored Packages for Discerning Travelers</h2>
          <p>Contact our team to create a bespoke service package that perfectly complements your travel preferences</p>
          <button className="services-contact-btn">Inquire Now</button>
        </div>
      </section>
    </main>
  );
}
