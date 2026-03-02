import { Link } from 'react-router-dom';
import logo from "../assets/csk-logo.png";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">
          
          {/* Brand Info */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <img src={logo} alt="CSK Logo" className="footer-logo" />
              <div>
                <h4 className="m-0">CSK Universe</h4>
                <p className="tagline">Whistle Podu!</p>
              </div>
            </div>
            <p className="footer-desc mt-3">
              The ultimate fan hub for Chennai Super Kings. Stay updated with live scores, player stats, news, and connect with fellow CSK fans.
            </p>
            <div className="footer-social-links">
              <a href="https://facebook.com/TheChennaiSuperKings"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/ChennaiIP"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/chennaiipl"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/chennaiipl"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 ps-lg-5">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/players">Players</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/stats">Stats</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/fanzone">Fan Zone</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <h5 className="footer-title">Contact</h5>
            <ul className="footer-contact">
              <li><i className="fas fa-envelope"></i> support@cskuniverse.com</li>
              <li><a href="#">Send Feedback</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom text-center">
          <p>© 2026 CSK Universe. Made with 💛 for CSK fans</p>
          <small className="disclaimer">This is a fan-made website and is not officially affiliated with Chennai Super Kings or IPL.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;