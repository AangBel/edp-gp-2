import { useState } from "react";
// import React, { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import Planet from "./components/Planet";
import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;