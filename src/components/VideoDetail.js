import React from "react";

const VideoDetail = ({ video }) => (
  <section className="video_detail">
    <iframe
      className="video_iframe"
      title="youtube video player"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <h3>{video.snippet.channelTitle}</h3>
    <pre className="video_description">{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
