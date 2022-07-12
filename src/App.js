import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/VideoList";
import Header from "./Header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className="App">
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
