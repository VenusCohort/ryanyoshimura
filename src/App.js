import React from 'react';
import './styling/App.css';
import {Home} from "./pages/Home";
import Navbar from "./Navbar";
import {Projects} from "./pages/Projects";
import {Info} from "./pages/Info";
import {Route, Routes} from "react-router-dom"

function App(){
    return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/info" element={<Info />} />

            </Routes>
        </div>
        </>
        )
    }
export default App;
