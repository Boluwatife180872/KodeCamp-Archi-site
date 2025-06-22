import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <div className="logo-icon">PA</div>
              <span className="logo-text">DIGITAL PROJECT</span>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Information</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Main
              </a>
              <a href="#" className="footer-link">
                Gallery
              </a>
              <a href="#" className="footer-link">
                Projects
              </a>
              <a href="#" className="footer-link">
                Certifications
              </a>
              <a href="#" className="footer-link">
                Contacts
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contacts</h4>
            <div className="footer-links">
              <p className="footer-link">1234 Sample Street</p>
              <p className="footer-link">Austin Texas 78704</p>
              <p className="footer-link">512.333.2222</p>
              <p className="footer-link">sampleemail@gmail.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Social Media</h4>
            <div className="social-icons">
              <Facebook size={20} className="social-icon" />
              <Twitter size={20} className="social-icon" />
              <Linkedin size={20} className="social-icon" />
              <Instagram size={20} className="social-icon" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
