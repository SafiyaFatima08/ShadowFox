import React, { useState } from "react";
import { detailedStats } from "../Data/statsData";
import "./Stats.css";

const Stats = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <div className="stats-container">
      <h2 className="stats-main-title">CSK TEAM STATS & LEGACY</h2>

      {/* Navigation Tabs */}
      <div className="stats-nav">
        {Object.keys(detailedStats).map((tab) => (
          <button 
            key={tab}
            className={activeTab === tab ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="stats-content">
        {activeTab === "achievements" && (
          <div className="achievements-grid">
            {detailedStats.achievements.map((item, idx) => (
              <div key={idx} className="achievement-card">
                <div className="trophy">🏆</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Batting/Bowling/History/Venues Tables */}
        {["batting", "bowling", "teamRecords", "history", "venues"].includes(activeTab) && (
          <div className="table-responsive">
            <table className="stats-table">
              <thead>
                {activeTab === "batting" && <tr><th>Player</th><th>Runs</th><th>SR</th><th>Avg</th><th>High</th></tr>}
                {activeTab === "bowling" && <tr><th>Player</th><th>Wkts</th><th>Eco</th><th>Avg</th><th>Best</th></tr>}
                {activeTab === "teamRecords" && <tr><th>Record</th><th>Value</th><th>Against</th><th>Year</th></tr>}
                {activeTab === "history" && <tr><th>Year</th><th>Result</th><th>Captain</th><th>Finalist</th></tr>}
                {activeTab === "venues" && <tr><th>Stadium</th><th>Played</th><th>Won</th><th>Win %</th></tr>}
              </thead>
              <tbody>
                {detailedStats[activeTab].map((row, i) => (
                  <tr key={i}>
                    {activeTab === "batting" && <><td>{row.name}</td><td className="gold">{row.runs}</td><td>{row.sr}</td><td>{row.avg}</td><td>{row.high}</td></>}
                    {activeTab === "bowling" && <><td>{row.name}</td><td className="gold">{row.wickets}</td><td>{row.eco}</td><td>{row.avg}</td><td>{row.best}</td></>}
                    {activeTab === "teamRecords" && <><td>{row.title}</td><td className="gold">{row.value}</td><td>{row.against}</td><td>{row.year}</td></>}
                    {activeTab === "history" && <><td>{row.year}</td><td className="green">{row.result}</td><td>{row.captain}</td><td>{row.runnerUp}</td></>}
                    {activeTab === "venues" && <><td>{row.stadium}</td><td>{row.matches}</td><td>{row.won}</td><td className="gold">{row.winRate}</td></>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;