import { Link } from "react-router-dom";
import logo from "../assets/csk-logo.png"; 
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blue sticky-top border-bottom border-warning">
      <div className="container-fluid px-4">

        {/* Logo and Brand Name Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="CSK Logo" 
            width="50" 
            height="50" 
            className="d-inline-block align-top me-2 logo-glow" 
          />
          <div className="brand-text-wrapper">
            <span className="brand-name-main">CHENNAI</span>
            <span className="brand-name-sub">SUPER KINGS</span>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/players">Players</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/schedule">Schedule</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/stats">Stats</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/news">News</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase text-warning" to="/fans">Fans</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
