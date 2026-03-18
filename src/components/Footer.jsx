import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.png" alt="Gym logo" className="footer-logo" />
        </div>

        <div>
          <h3>Opening Hours</h3>
          <p>Monday - Friday</p>
          <p className="highlight">6:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday</p>
          <p className="highlight">8:00 AM - 8:00 PM</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <p>© 2026 Fit Life Gym.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;