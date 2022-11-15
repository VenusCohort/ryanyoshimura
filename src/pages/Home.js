import logo from '../logo.svg'
import React, {Component} from 'react';
import "../styling/Home.css";
import surf from '../img/duck-dive.jpg'


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
                        <div id="project-grid-base">
                            <div className="">
                                <div className="img-black-overlay"></div>
                                <div id="grid-base1" className="grid-base"><img src={surf}  alt="img" className="imgSize"/></div>
                            </div>
                            <div className="">
                                <div className="img-black-overlay"></div>
                                <div id="grid-base2" className="grid-base"><img src={surf}  alt="img" className="imgSize"/></div>
                            </div>
                            <div className="">
                                <div className="img-black-overlay"></div>
                                <div id="grid-base3" className="grid-base"><img src={surf}  alt="img" className="imgSize"/></div>
                            </div>
                            <div className="">
                                <div className="img-black-overlay"></div>
                                <div id="grid-base4" className="grid-base"><img src={surf}  alt="img" className="imgSize"/></div>
                            </div>

                        </div>
                    </div>
                </header>
            </div>
        );
    }
}



