import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/VideoList";
import Header from "./Header";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCqIWbzTYxprOXEE9iJbrA2TGAH4vYtI3U",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Header />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
