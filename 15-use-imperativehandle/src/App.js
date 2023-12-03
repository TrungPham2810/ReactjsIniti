import {useRef, useEffect} from "react";

import Video from "./Video";
import './App.css';

function App() {
  const videoRef = useRef();
  useEffect (() => {
    console.log(videoRef.current);

  }, []);
  const handlePlay = () => {
    videoRef.current.play();
  }

  const handlePause = () => {
    videoRef.current.pause();
  }
  return (
    <div className="App">
      <h1>hello Mark 222</h1>
  
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
