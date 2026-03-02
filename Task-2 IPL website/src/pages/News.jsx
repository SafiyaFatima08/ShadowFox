import React, { useState } from 'react';
import { newsData } from '../Data/newsData';
import '../App.css';

const News = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="news-container py-5">
      <div className="container">
        <h1 className="text-white fw-bold mb-5">LATEST <span className="text-warning">VIDEOS</span></h1>
        <div className="row g-4">
          {newsData.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="video-card h-100" onClick={() => setActiveVideo(item.videoId)}>
                <div className="img-wrapper">
                  <img src={item.img} alt={item.title} />
                  <div className="play-icon"><i className="fas fa-play"></i></div>
                  <span className="category-tag">{item.category}</span>
                </div>
                <div className="card-info">
                  <p className="date-text">{item.date}</p>
                  <h4>{item.title}</h4>
                  <p className="desc-text">{item.description}</p>
                  <span className="watch-btn">WATCH VIDEO <i className="fas fa-chevron-right ms-1"></i></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-wrapper-main" onClick={e => e.stopPropagation()}>
             {/* Yellow circular close button for better visibility */}
             <button className="close-video-x" onClick={() => setActiveVideo(null)}>
               <i className="fas fa-times"></i>
             </button>
             
             <div className="video-ratio-box">
               <iframe 
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
               </iframe>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;