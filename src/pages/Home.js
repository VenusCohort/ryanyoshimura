// import logo from "../logo.svg";
// import React from "@types/react";
// import React from 'react';
// import logo from '/src/logo.svg';
// import '../App.css';
// import '../App.css'
import React, {Component} from 'react';


export class Home extends Component{
    render() {
        return (
            <div className="homePage">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Home Page!!!
                    </a>
                </header>
            </div>
        );
    }
}



