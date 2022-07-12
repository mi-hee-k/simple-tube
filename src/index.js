import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Youtube from "./service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App youtube={youtube} />);
