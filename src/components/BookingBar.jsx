// BookingBar.jsx
import './Booking.css';
import { useState } from 'react';
import JetList from './JetList';
import { motion } from 'framer-motion';

const BookingBar = () => {
  const [tripType, setTripType] = useState("ONE-WAY");
  const [jetType, setJetType] = useState("jet");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [passengers, setPassengers] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showJets, setShowJets] = useState(false);
  const [message, setMessage] = useState("");

  const handleJetType = (type) => {
    setJetType(type);
    if (type === "helicopter") {
      setShowJets(false);
      setMessage("🚁 Helicopter bookings are coming soon!");
    } else {
      setMessage("");
    }
  };

  const handleSearch = () => {
    if (
      departure && departure !== "Departure" &&
      arrival && arrival !== "Arrival" &&
      passengers && passengers !== "Passengers" &&
      dateTime
    ) {
      if (jetType === "jet") {
        setShowJets(true);
        setMessage("");
      } else if (jetType === "helicopter") {
        setShowJets(false);
        setMessage("🚁  Helicopter bookings are coming soon!");
      }
    } else {
      setShowJets(false);
      setMessage("⚠️ Please fill in all fields before searching.");
    }
  };

  return (
    <>
      <div className="booking-bar">

        <div className="jet-tabs">
          <button
            className={`jet-tab ${jetType === 'jet' ? 'active' : ''}`}
            onClick={() => handleJetType('jet')}
          >
            🛩️ JET
          </button>
          <button
            className={`jet-tab ${jetType === 'helicopter' ? 'active' : ''}`}
            onClick={() => handleJetType('helicopter')}
          >
            🚁 HELICOPTER
          </button>
        </div>


        <div className="trip-types">
          {["ONE-WAY", "ROUND-TRIP", "MULTI-CITY"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="tripType"
                checked={tripType === type}
                onChange={() => setTripType(type)}
              />
              {type.replace("-", " ")}
            </label>
          ))}
        </div>


        <div className="booking-form">

          <select value={departure} onChange={(e) => setDeparture(e.target.value)} required>
            <option>Departure</option>
            <option>Mumbai (BOM)</option>
            <option>Delhi (DEL)</option>
            <option>Bangalore (BLR)</option>
            <option>Chennai (MAA)</option>
            <option>Pune (PNQ)</option>
            <option>Hyderabad (HYD)</option>
            <option>Kolkata (CCU)</option>
            <option>Ahmedabad (AMD)</option>
            <option>Goa (GOI)</option>
            <option>Jaipur (JAI)</option>
          </select>


          <select value={arrival} onChange={(e) => setArrival(e.target.value)} required>
            <option>Arrival</option>
            <option>Delhi (DEL)</option>
            <option>Mumbai (BOM)</option>
            <option>Bangalore (BLR)</option>
            <option>Chennai (MAA)</option>
            <option>Pune (PNQ)</option>
            <option>Hyderabad (HYD)</option>
            <option>Kolkata (CCU)</option>
            <option>Ahmedabad (AMD)</option>
            <option>Goa (GOI)</option>
            <option>Jaipur (JAI)</option>
          </select>


          <select value={passengers} onChange={(e) => setPassengers(e.target.value)} required>
            <option>Passengers</option>
            {[...Array(12)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>


          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />


          <button className="search-button" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>
      </div>


      {message && <div className="custom-message">{message}</div>}


      {showJets && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <JetList />
        </motion.div>
      )}
    </>
  );
};

export default BookingBar;
