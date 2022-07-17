import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./pages/LandingPage";
import './App.css';
import RANDOM_QUOTE_GENERATOR from "./RANDOM_QUOTE_GENERATOR/views";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="random_quote_machine" element={<RANDOM_QUOTE_GENERATOR />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
