import React from "react";
import VidoeItem from "./VidoeItem";

const VideoList = (props) => {
  return (
    <div>
      <ul>
        {props.videos.map((video) => (
          <VidoeItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
