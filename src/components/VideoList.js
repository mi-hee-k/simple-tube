import React from "react";
import VidoeItem from "./VidoeItem";

const VideoList = (props) => {
  return (
    <ul className="video_list">
      {props.videos.map((video) => (
        <VidoeItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
