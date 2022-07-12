import React from "react";
import VidoeItem from "./VidoeItem";

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className="video_list">
      {videos.map((video) => (
        <VidoeItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
