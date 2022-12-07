import React from 'react';
import {Home} from "./components/Home";
import Navbar from "./Navbar";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Route, Routes} from "react-router-dom"

function App(){
    return (
    <>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <Navbar />
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        </>
        )
    }
export default App;
