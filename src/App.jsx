import React from "react";
import './app.css';
import Home from "./pages/Home";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Map from "./pages/MapView";

const App = () => {


    return (
      
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                </Routes>

            </Router>
    )
}

export default App