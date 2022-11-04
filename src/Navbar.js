import React, {Component} from 'react';
export default function Navbar (){
    return <nav className="nav">
        <a href="/" className="title">Y</a>
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