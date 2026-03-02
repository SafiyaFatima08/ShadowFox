import players from "../Data/playersData.js"; 
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";

function Players() {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredSquad = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h1 className="text-center text-warning mb-2 display-4 fw-bold">
        CSK SQUAD <span className="text-white">2025</span>
      </h1>
      <p className="text-center text-light mb-5">Meet the warriors who will bring the cup home!</p>

      {/* Search Bar */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="search-wrapper">
            <input 
              type="text" 
              className="form-control squad-search" 
              placeholder="Search players by name (e.g. Dhoni)..." 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredSquad.map((player) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={player.id}> {/* Unique ID as key */}
            <div className="player-card-premium">
              <div className="player-img-box">
                
                {player.tag && <span className="tag-label">{player.tag}</span>}
                <span className="jersey-number">{player.jersey}</span>
                
                <img src={player.img} alt={player.name} className="player-photo" />
              </div>
              
              <div className="player-details">
                <h4 className="player-name">{player.name}</h4>
                <div className="role-badge">{player.role.toUpperCase()}</div>
                
                <Link to={`/player/${player.id}`}>
                  <button className="btn-view-stats">View Full Stats</button>
                </Link>
              </div>
            </div>
          </div>
        ))} 
      </div>
      
      {filteredSquad.length === 0 && (
        <h3 className="text-center text-secondary mt-5">No player found with that name.</h3>
      )}
    </div>
  );
}

export default Players;