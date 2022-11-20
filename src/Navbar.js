import React, {Component} from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar (){
    return (
        <nav className="nav">
            <Link to="/" id="title">
                <div id="logo-circle">
                    <div id="logo-text">Y</div>
                </div>
            </Link>
            <ul>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/info">Contact</CustomLink>
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