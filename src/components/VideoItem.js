import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return ( 
    <div className="item" onClick={() => onVideoSelect(video)}>
        <img className="ui image" alt={ video.snippet.title }src={ video.snippet.thumbnails.default.url } />
        <div className="content">
            <div className="header">{ video.snippet.title }</div>
        </div>
    </div>
    );
};

export default VideoItem;