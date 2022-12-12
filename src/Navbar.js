import React, {Component} from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar (){
    function logoShrink(){
        // let y = document.querySelector("#logo-text");
        // y.addEventListener(onclick())
        //shrink text here
        // let text = document.querySelector("#title");
        // text.style.fontsize("2rem");
        // font-size: 2rem;
        // text.style.margin.left("1vw");
        // text.style.justifyContent("end");
        // text.style.boxShadow("box-shadow: 0px -1px 1px 1px black");
    }
    return (
        <nav className="nav">
            <Link to="/" id="title">
                <div id="logo-circle">
                    <div id="logo-text" onClick={logoShrink}>Y</div>
                </div>
            </Link>
            <ul>
                {/*<CustomLink to="/projects">Projects</CustomLink>*/}
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}