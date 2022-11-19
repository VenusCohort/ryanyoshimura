import logo from '../logo.svg'
import React, {Component} from 'react';
import "../styling/Home.css";
import surf from '../img/duck-dive.jpg'
import tsumamiLandingBg from '../img/landingPage-bg.jpeg'


export class Home extends Component{
    render() {
        function goToLinkTsumami(e) {
            window.open('https://www.tsumami.cooking:8080/landing', '_blank', "noopener noreferrer");
        }
        function goToLinkWeatherMap(e) {
            window.open('https://www.tsumami.cooking:8080/landing', '_blank', "noopener noreferrer");
        }
        function goToLinkKonamiCode(e) {
            window.open('https://www.tsumami.cooking:8080/landing', '_blank', "noopener noreferrer");
        }
        function goToLinkJavaConsoletContactManager(e) {
            window.open('https://www.tsumami.cooking:8080/landing', '_blank', "noopener noreferrer");
        }
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
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkTsumami}>
                                        <div className="project-text"><h2>tsUmami</h2></div>
                                    </div>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base2" className="grid-base">
                                    <img src={surf} alt="img" className="projects-img"/>
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkWeatherMap}>
                                        <div className="project-text"><h2>WEATHERMAP</h2></div>
                                    </div>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base3" className="grid-base">
                                    <img src={surf} alt="img" className="projects-img"/>
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkKonamiCode}>
                                        <div className="project-text"><h2>KONAMI-CODE</h2></div>
                                    </div>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base4" className="grid-base">
                                    <img src={surf} alt="img" className="projects-img" />
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkJavaConsoletContactManager}>
                                        <div className="project-text"><h2>JAVA CONSOLE CONTACT MANAGER</h2></div>
                                    </div>
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

