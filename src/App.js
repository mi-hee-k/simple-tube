import { useEffect, useState } from "react";
import "./App.css";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import Header from "./Header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className="App">
      <Header onSearch={search} />
      <section className="video_content">
        {selectedVideo && (
          <div className="video_detail_container">
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className="video_list">
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
