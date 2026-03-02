import React from "react";
import { useParams, Link } from "react-router-dom";
import scheduleData from "../Data/scheduleData";

const Scorecard = () => {
  const { id } = useParams();
  const match = scheduleData.find((m) => m.id === Number(id));

  if (!match) return <div className="text-white text-center mt-5"><h2>Match Not Found</h2></div>;

  return (
    <div className="schedule-container text-white">
      <div className="container py-5">
        <Link to="/schedule" className="btn btn-outline-warning mb-4">← Back to Schedule</Link>
        
        <div className="card bg-dark border-secondary p-5 text-center shadow-lg">
          <h4 className="text-warning mb-4">{match.venue}</h4>
          
          <div className="d-flex justify-content-around align-items-center mb-5">
            <div className="team-box">
              <h1 className="display-3 fw-bold">{match.team1}</h1>
            </div>
            <div className="vs-circle bg-warning text-dark fw-bold rounded-circle p-3">VS</div>
            <div className="team-box">
              <h1 className="display-3 fw-bold">{match.team2}</h1>
            </div>
          </div>

          <div className="score-box p-4 bg-black rounded-3 border border-warning">
             <h2 className="display-4 text-warning">{match.score || "TBA"}</h2>
             <p className="text-success h4 mt-2">{match.result}</p>
          </div>

          <div className="mt-5 text-secondary">
            <p>Date: {match.date} | Time: {match.time}</p>
            <p className="badge bg-primary">MATCH STATUS: {match.status.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;