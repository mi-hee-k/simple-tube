import React from "react";

const VidoeItem = ({ video }) => {
  const img = video.snippet.thumbnails.medium.url;
  return (
    <li className="video_item">
      <div className="video_item_container">
        <img src={img} alt="video thumnail" />
        <div>
          <h3>{video.snippet.title}</h3>
          <span>{video.snippet.channelTitle}</span>
        </div>
      </div>
    </li>
  );
};

export default VidoeItem;
