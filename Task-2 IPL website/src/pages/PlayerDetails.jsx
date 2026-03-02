import React from "react";
import { useParams, Link } from "react-router-dom";
import players from "../Data/playersData";

function PlayerDetails() {
  const { id } = useParams();

  // Player find
  const player = players.find((p) => p.id === id);

  
  if (!player) {
    return (
      <div className="text-center text-white mt-5">
        <h2>Player Not Found</h2>
        <Link to="/players" className="btn btn-warning mt-3">
          Back to Players
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5 text-white">
      <Link to="/players" className="btn btn-warning mb-4">
        ⬅ Back
      </Link>

      <div className="row align-items-center">
        {/* Player Image */}
        <div className="col-md-4 text-center">
          <img
            src={player.img}
            alt={player.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Player Details */}
        <div className="col-md-8">
          <h1 className="text-warning fw-bold">{player.name}</h1>
          <h4 className="mb-3">{player.role}</h4>

          <p><b>Jersey No:</b> {player.jersey}</p>
          <p><b>Nationality:</b> {player.nationality}</p>
          <p><b>Batting Style:</b> {player.battingStyle}</p>
          <p><b>Bowling Style:</b> {player.bowlingStyle}</p>

          <div className="mt-3">
            <h5>About Player</h5>
            <p>{player.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;