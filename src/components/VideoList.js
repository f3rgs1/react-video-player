import React from "react";
import VideoItem from "./VideoItem"; //import VideoItem component as each video item will be rendered inside of the VideoList component

const VideoList = ({ videos, onVideoSelect }) => { //ES6 Destructure the videos portion out of the props in order to avoid repetition (e.g. props.videos.length) and assign to a variable
    const renderedList = videos.map((video) => { //map over every item in the videos array
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />; //for each item in the videos array render a videoitem component

    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;