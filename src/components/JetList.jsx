import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./JetList.css"; 
import Footer from "./Footer";
import dataJson from "../../db.json"

const JetList = () => {
  const [jets, setJets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJets = async () => {
      try {
        // const res = await fetch("http://jsonkeeper.com/b/99WA");
        // const data = await res.json();
        setJets(dataJson.jets);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch jets:", error);
        setLoading(false);
      }
    };

    fetchJets();
  }, []);

  const knotsToKmh = (knots) => Math.round(knots * 1.852);
  const nmToKm = (nm) => Math.round(nm * 1.852);

  if (loading) {
    return (
      <div className="loading-screen">
        <p className="loading-text">Loading luxury jets...</p>
      </div>
    );
  }

  return (
    <>
      <div className="jet-list-container">
        <div style={{ paddingTop: "80px" }}>
          <h1 className="jet-list-title">Available Jets</h1>
        </div>
        <div className="jet-grid">
          {jets.map((jet, index) => (
            <div key={index} className="jet-card">
              <div className="jet-image-wrapper">
                <img src={jet.image} alt={jet.name} className="jet-image" />
              </div>
              <div className="jet-info">
                <h2 className="jet-model">{jet.model}</h2>
                <p className="jet-manufacturer">{jet.manufacturer}</p>
                <div className="jet-details">
                  <p><strong>Range:</strong> {jet.range} nm ({nmToKm(jet.range)} km)</p>
                  <p><strong>Speed:</strong> {jet.speed} knots ({knotsToKmh(jet.speed)} km/h)</p>
                  <p><strong>Seats:</strong> {jet.seats}</p>
                  <p className="price" style={{ fontSize: "30px" }}>
                    <strong>Charter Price:</strong> ₹{jet.price.toLocaleString("en-IN")}
                  </p>
                  <button className="btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer is now outside the main content */}
      <Footer />
    </>
  );
};

export default JetList;
