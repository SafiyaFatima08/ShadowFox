import React, { useState } from 'react';
import '../App.css';

const Fans = () => {
  const [voted, setVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, user: "Aryan", text: "Thala is the heartbeat of CSK! 💛", time: "2m ago", initial: "A" },
    { id: 2, user: "John", text: "Can't wait to see the sea of yellow at Chepauk stadium!", time: "15m ago", initial: "J" }
  ]);

  const mockResults = { 'Ruturaj Gaikwad': 45, 'Devon Conway': 15, 'Shivam Dube': 20, 'MS Dhoni': 20 };

  const handlePost = () => {
    if (commentText.trim() === "") return;
    setPosts([{ id: Date.now(), user: "You", text: commentText, time: "Just now", initial: "Y" }, ...posts]);
    setCommentText("");
  };

  return (
    <div className="fan-zone-main">
      <div className="container py-5">
        <h1 className="main-title text-center mb-5">SUPER KINGS <span className="text-warning">FAN ZONE</span></h1>
        
        {/* --- POLL SECTION --- */}
        <div className="poll-box-container p-4 mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="text-white m-0">Active Poll</h3>
            <span className="live-dot">● LIVE</span>
          </div>
          <p className="text-light mb-4">Who will be the 2026 Season Star?</p>
          
          <div className="poll-grid">
            {Object.keys(mockResults).map((player) => (
              <div key={player} className="poll-item">
                <button 
                  className={`poll-action-btn ${selectedOption === player ? 'selected' : ''}`}
                  onClick={() => { setSelectedOption(player); setVoted(true); }}
                  disabled={voted}
                >
                  <span>{player}</span>
                  {voted && <span className="fw-bold">{mockResults[player]}%</span>}
                </button>
                {voted && (
                  <div className="poll-progress-bg">
                    <div className="poll-progress-fill" style={{ width: `${mockResults[player]}%` }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- FAN DISCUSSION --- */}
        <div className="discussion-box-container p-4">
          <h3 className="text-white mb-4"><i className="fas fa-comments text-warning me-2"></i> FAN DISCUSSION WALL</h3>
          
          <div className="post-input-wrapper mb-5">
            <textarea 
              className="fan-input-field" 
              placeholder="Tell the world why you're a Super Fan..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <div className="text-end mt-2">
              <button className="btn-post-yellow" onClick={handlePost}>POST MESSAGE</button>
            </div>
          </div>

          <div className="fan-feed">
            {posts.map((post) => (
              <div key={post.id} className="feed-card mb-3">
                <div className="d-flex align-items-center mb-2">
                  <div className="user-icon">{post.initial}</div>
                  <div className="ms-3">
                    <span className="text-warning fw-bold">{post.user}</span>
                    <span className="text-muted ms-2 small">{post.time}</span>
                  </div>
                </div>
                <p className="text-light-50 ms-5">{post.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fans;