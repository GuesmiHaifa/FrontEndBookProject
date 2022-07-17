import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Inscription from "./components/Inscription";
import Bookpage from "./pages/Bookpage";
import Homepage from "./pages/Homepage";
import "./style/App.css"



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className='main'>
        <Routes>  
          <Route path="/" element={<Homepage/>} />
          <Route path="/books:id" element={<Bookpage/>} />
          <Route path="/inscription" element={<Inscription/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;
