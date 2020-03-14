import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VC from './components/video_conference';
import './App.css';
import CamStream from './components/camera';
// import SocketIO from './components/socket';

function App() {
  return (
    <div className="App">
      <VC />
      <CamStream />
      {/* <SocketIO /> */}
    </div>
  );
}

export default App;
