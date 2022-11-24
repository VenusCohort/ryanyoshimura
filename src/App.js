import React from 'react';
import {Home} from "./pages/Home";
import Navbar from "./Navbar";
import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import {Route, Routes} from "react-router-dom"

function App(){
    return (
    <>
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
