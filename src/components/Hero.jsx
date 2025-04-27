import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

import BookingShow from "../BookingShow"; 
import BookingPage from "./BookingPage";
import JetList from "./JetList";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Hero() {
  const navigate = useNavigate();
  const [showJets, setShowJets] = useState(false);


  const handleSearch = () => {
    setShowJets(true);
  };

  const faqs = [
    {
      question: "How does the charter process work?",
      answer: "After your initial enquiry you will be assigned a personal charter expert who will send you a selection of quotes for you to choose from. Each quote will have a clear breakdown of aircraft and airports as well as the reasons they’ve been selected for you. Should you wish to go ahead, your personal charter expert will book the private airplane and send you the flight details."
    },
    {
      question: "How do I decide which private airplane to charter?",
      answer: "Your dedicated account manager will narrow down your best options from the wide range of aircraft available. Our advice is always based on your needs and requirements."
    },
    {
      question: "How much luggage can I take with me on charter flights?",
      answer: "We will let you know how much the hold can take on your chosen aircraft and you will be able to upgrade if you feel more space is needed."
    },
    {
      question: "When do I need to check in before my charter flight?",
      answer: "When using private terminals, you are able to check in much closer to take-off than on a scheduled service flight."
    },
    {
      question: "Can I fly with my pet on an ACS charter?",
      answer: "Yes, although there are rules when flying into, or out of, the UK with a companion animal. They will need a pet passport as well as being microchipped, and their rabies vaccinations must be up to date."
    },
  ];

  const services = [
    {
      title: "VJ25",
      description: "Perfect for flying between 25 to 49 hours each year, with guaranteed flight availability on all non-peak and most peak days.",
      buttonText: "View Membership",
      imgUrl: "./images/img1.png", 
    },
    {
      title: "CORPORATE",
      description: "A full suite of flexible business jet solutions for corporations and executives around the world.",
      buttonText: "View Membership",
      imgUrl: "./images/img2.png", 
    },
    {
      title: "DIRECT",
      description: "An on demand flight at dynamic rates.",
      buttonText: "Request a Quote",
      imgUrl: "./images/img3.png", 
    },
  ];

  const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="faq-item">
        <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
          <h3>{question}</h3>
          <div className={`faq-icon ${isOpen ? "open" : ""}`}>
            {isOpen ? "-" : "+"}
          </div>
        </div>
        <div className={`faq-answer ${isOpen ? "show" : ""}`}>
          <p>{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <>




      <section className="main-hero-section">
        <video className="main-hero-video" autoPlay loop muted>
          <source src="https://res.cloudinary.com/df1hzmai7/video/upload/v1745611441/privatejet_1__1_niixza.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* <div className="hero-overlay">
          <h1 className="hero-text">Fly Beyond Luxury</h1>
        </div> */}
      </section>


      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions About Private Jet Hire</h2>
        {faqs.map((faq, idx) => (
          <FAQ key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </section>


      <section className="premium-services">
        <h2 className="section-title">ALL THE WAYS TO FLY</h2>
        <div className="service-items">
          {services.map((service, idx) => (
            <div key={idx} className="service-item">
              <img src={service.imgUrl} alt={service.title} className="item-image" />
              <div className="item-content">
                <h3 className="item-title">{service.title}</h3>
                <p className="item-description">{service.description}</p>
                <button className="item-button" onClick={()=>navigate("./membership")}>{service.buttonText}</button>
              </div>
            </div>
          ))}
          
        </div>
       
      </section>
      <Footer/>
    </>
  );
}
