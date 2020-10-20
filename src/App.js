import React from 'react';
import { Counter } from './features/Counter.js';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js';



function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
}

export default App;
