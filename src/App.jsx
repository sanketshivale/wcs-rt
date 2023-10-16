import React from "react";
import './app.css';
import Home from "./pages/Home";
import {Route, HashRouter as Router, Routes } from "react-router-dom";

const App = () => {


    return (
      
            <Router>
                <Routes>
                    <Route index path="/" element={<Home />} />

                </Routes>

            </Router>
    )
}

export default App