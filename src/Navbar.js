import React, {Component} from 'react';
export default function Navbar (){
    return <nav className="n">
        <a href="/" className="mainPage">Y</a>
        <ul>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/info">Info</a>
            </li>
        </ul>
    </nav>
}