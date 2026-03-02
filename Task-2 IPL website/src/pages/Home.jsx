import { useNavigate } from "react-router-dom"; 
import logo from "../assets/csk-logo.png";
import dhoniImg from "../assets/ms dhoni.jpg"; 
import "../App.css";

function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="home-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero-section text-center">
        <img src={logo} alt="CSK Logo" className="hero-logo mb-4" />
        <h1 className="hero-title">
          WHISTLE <span className="text-primary-blue">PODU!</span>
        </h1>
        <p className="hero-subtitle">The Ultimate Fan Hub for Chennai Super Kings</p>
        
        <div className="hero-btns mt-4">
          
          <button 
            className="btn btn-warning btn-lg fw-bold me-3 px-4"
            onClick={() => navigate("/players")}
          >
            Explore Players
          </button>

          {/* Clicking this goes to Schedule page */}
          <button 
            className="btn btn-outline-warning btn-lg fw-bold px-4"
            onClick={() => navigate("/schedule")}
          >
            View Schedule
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;