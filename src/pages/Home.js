// import logo from "../logo.svg";
// import React from "@types/react";
// import React from 'react';
// import logo from '../logo.svg';
import logo from '../logo.svg'
// import '../App.css'
// import './App.css';
import React, {Component} from 'react';
import "../styling/Home.css";


export class Home extends Component{
    render() {
        return (
            <div className="homePage">
                <header>
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/*<div className="div1">Home Page!!!</div>*/}
                    </a>
                    <div className="mainContainer">
                        {/*<div><img className="reactLogo" src={logo} alt="img"></img></div>*/}
                        {/*<div><img className="reactLogo2"src="https://files.virgool.io/upload/users/24829/posts/m0a581jdk8zj/30ovzh9b1xr0.jpeg" alt="img"></img></div>*/}
                        <div>Things here</div>
                    </div>




                </header>
            </div>
        );
    }
}



