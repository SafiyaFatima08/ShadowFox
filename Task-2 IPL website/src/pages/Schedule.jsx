import React, { useState } from "react";
import scheduleData from "../Data/scheduleData";
import { Link } from "react-router-dom";
import "./Schedule.css";
import cskImg from "../assets/csk.png";
import miImg from "../assets/mi.png";
import rcbImg from "../assets/rcb.png";
import gtImg from "../assets/GT.png"; 
import srhImg from "../assets/srh.png";
import pbksImg from "../assets/pbks.png";
import dcImg from "../assets/dc.png";

const Schedule = () => {
  const [filter, setFilter] = useState("all");

  // 2. Helper function
  const getLogo = (teamName) => {
    const logos = {
      CSK: cskImg,
      MI: miImg,
      RCB: rcbImg,
      GT: gtImg,
      SRH: srhImg,
      PBKS: pbksImg,
      DC: dcImg,
    };
    return logos[teamName] || cskImg; 
  };

  const filteredMatches =
    filter === "all"
      ? scheduleData
      : scheduleData.filter((match) => match.status === filter);

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">CSK Match Schedule</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["all", "completed", "live", "upcoming"].map((status) => (
          <button
            key={status}
            className={filter === status ? "active-btn" : ""}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Match Cards List */}
      <div className="match-list">
        {filteredMatches.map((match) => (
          <div key={match.id} className="match-card">
             <div className="match-content-left">
              <div className="match-header-row">
                <div className="teams-row">
                  <div className="team-box">
                    <div className="logo-container">
                      <img src={getLogo(match.team1)} alt={match.team1} className="team-logo" />
                    </div>
                    <span className="team-name">{match.team1}</span>
                  </div>
                  
                  {/* Styled Square VS Badge */}
                  <div className="vs-badge-square">VS</div>
                  
                  <div className="team-box">
                    <div className="logo-container">
                      <img src={getLogo(match.team2)} alt={match.team2} className="team-logo" />
                    </div>
                    <span className="team-name">{match.team2}</span>
                  </div>
                </div>
              </div>

             <div className="match-info-text">
                {match.date} | {match.time} | {match.venue}
              </div>
              {match.score && <div className="match-score">{match.score}</div>}
              {match.result && <div className="match-result text-success-light">{match.result}</div>}
            </div>
            <div className="match-actions-right">
              <div className={`status-pill ${match.status === 'completed' ? 'completed-balanced' : match.status}`}>
                {match.status.toUpperCase()}
              </div>
                {match.status !== "upcoming" && (
                <Link to={`/score/${match.id}`}>
                  <button className="view-score-btn mt-2">View Score</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;