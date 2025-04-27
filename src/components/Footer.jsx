import { 
    Send, 
    MapPin, 
    Phone, 
    Mail, 
    ChevronRight 
  } from "lucide-react";

import "./Footer.css"
  
  export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="footer-logo">Fly Premium</div>
                <p className="footer-description">
                  Experience unparalleled luxury and convenience with our premium
                  private aviation services tailored to the most discerning
                  travelers.
                </p>
            
              </div>
  
              <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/fleet">Our Fleet</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/membership">Membership</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/destinations">Destinations</a>
                  </li>
                </ul>
              </div>
  
              <div className="footer-links">
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/services#concierge">Concierge Service</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/services#transportation">Ground Transportation</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/services#catering">In-flight Catering</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/services#vip">VIP Airport Assistance</a>
                  </li>
                  <li>
                    <ChevronRight size={14} />
                    <a href="/services#events">Exclusive Event Access</a>
                  </li>
                </ul>
              </div>
  
              <div className="footer-contact">
                <h3>Contact Us</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <MapPin size={18} />
                    <p>
                      Aviation Avenue
                      <br />
                      Chennai, CH 10001
                    </p>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} />
                    <p>+91 1234567890</p>
                  </div>
                  <div className="contact-item">
                    <Mail size={18} />
                    <p>info@flypremium.com</p>
                  </div>
                </div>
              </div>
  
             
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p className="copyright">
                &copy; {new Date().getFullYear()} Fly Premium. All Rights Reserved.
              </p>
              <div className="legal-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/cookies">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  