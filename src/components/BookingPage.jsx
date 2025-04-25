// BookingPage.jsx
import React, { useState } from "react";
import BookingBar from "./BookingBar";
import JetList from "./JetList";

const BookingPage = () => {
  const [showJets, setShowJets] = useState(false);

  const handleSearch = () => {
    setShowJets(true);
  };

  return (
    <div>
      <BookingPage onSearch={handleSearch} />
      {showJets && <Jet/>}
    </div>
  );
};

export default BookingPage;
