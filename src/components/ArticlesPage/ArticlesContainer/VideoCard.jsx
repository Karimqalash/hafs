import React from 'react';

const VideoCard = () => (
    <div className="video__card">
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/JF-Fahu9d_w"
            frameBorder="0"
            loading="lazy" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        >
        </iframe>
    </div>
)

export default VideoCard;