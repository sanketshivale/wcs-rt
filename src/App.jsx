import React from "react";
import './app.css';
import Home from "./pages/Home";
import {Route, HashRouter as Router, Routes } from "react-router-dom";
import Map from "./pages/MapView";

const App = () => {


    return (
      
            <Router>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/map" element={<Map />} />

                </Routes>

            </Router>
    )
}

export default App