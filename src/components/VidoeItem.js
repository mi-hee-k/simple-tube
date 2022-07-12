import React from "react";

const VidoeItem = (props) => {
  return (
    <div>
      <h1>{props.video.snippet.title}</h1>
    </div>
  );
};

export default VidoeItem;
