import logo from '../logo.svg'
import React, {Component} from 'react';
import "../styling/Home.css";
import surf from '../img/duck-dive.jpg'
import tsumamiLandingBg from '../img/landingPage-bg.jpeg'


export class Home extends Component{
    render() {
        // function changeBackground(e) {
            // e.target.style.backgroundColor = 'transparent';
            // e.target.style.width = '21.4rem';
            // e.target.style.height = '33.2rem';
            // e.target.style.transform = 'rotateX(52deg)';
            // e.target.style.margin = 'margin-left 1.7rem';
            // e.target.style.margin = 'margin-top: -28rem';
            // e.target.style.padding = '1px'
            // e.target.style = 'z-index: 9';
            // e.target.style.border = 'solid aqua 0.5px';
            // width: 21.4rem;
            // height: 33.2rem;
            // background: transparent;
            // transform: rotateX(52deg);
            // margin-left: 1.7rem;
            // margin-top: -28rem;
            // padding: 1px;
            // z-index: 9;
            // border: solid aqua 0.5px;
        // }
        // function revertBackground(e){
        //     e.target.style.backgroundColor = 'black';
        // }
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
                            <div className="base-container">
                                <div id="grid-base1" className="grid-base">
                                    <img src={tsumamiLandingBg} alt="img" className="projects-img"/>
                                    <a className="project-anchor-area" href="https://www.tsumami.cooking:8080/landing" target="_blank" rel="noopener noreferrer" >
                                        <div className="projects-img-overlay project-text-color">
                                            <div className="project-text"><h2>tsUmami</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base2" className="grid-base">
                                    <img src={surf} alt="img" className="projects-img"/>
                                    <a className="" href="https://google.com" target="_blank" rel="noopener noreferrer" >
                                        <div className="projects-img-overlay project-text-color">
                                            <div className="project-text"><h2>WEATHERMAP</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base3" className="grid-base">
                                    <img src={surf} alt="img" className="projects-img"/>
                                    <a className="" href="https://google.com" target="_blank" rel="noopener noreferrer" >
                                        <div className="projects-img-overlay project-text-color">
                                            <div className="project-text"><h2>KONAMI-CODE</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base4" className="grid-base">
                                    <img src={surf} alt="img" className="projects-img" />
                                    <a className="" href="https://google.com" target="_blank" rel="noopener noreferrer" >
                                        <div className="projects-img-overlay project-text-color">
                                            <div className="project-text"><h2>JAVA CONSOLE CONTACT MANAGER</h2></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}


//
// export function projectImgHover(){
//     let hoverArea = document.querySelector(".img-overlay");
//     hoverArea.addEventListener("onMouseEnter", function(){
//         hoverArea.createAttribute("style", "transparent")
//     } )
// }

// to activate js functions, put as attribute in className
//also, the JS goes right above the return statement code block
// onMouseOver={changeBackground} onMouseLeave={revertBackground}

