import logo from '../logo.svg'
import React, {Component} from 'react';
import "../styling/Home.css";
import surf from '../img/duck-dive.jpg'
import tsumamiLandingBg from '../img/landingPage-bg.jpeg'
import linkedIn from '../img/linkedin.png'
import github from '../img/github-signResized.png'
import alumniPage from '../img/codeup-arrow.png'

import AJAX from '../img/ajax.svg'
import CSS from '../img/css-3.svg'
import GIT from '../img/merge.svg'
import GITHUB from '../img/github-skills.svg'
import HTML from '../img/html-5.png'
import JAVA from '../img/java.svg'
import JS from '../img/java-script.svg'
import JSON from '../img/json.svg'
import MySql from '../img/mysql.svg'
import REACT from '../img/react-logo.png'
import SPRING from '../img/spring-logo.png'





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

                    <div className="mainContainer">
                        <div id="devInfo">
                            <div>Ryan Yoshimura</div>
                            <div id="about-me">About me things here</div>

                            {/*<div>Full stack dev</div>*/}
                        </div>

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
                        <div id="skills">

                            <img src={AJAX} alt="img" className="skills-img"></img>
                            <img src={CSS} alt="img" className="skills-img"></img>
                            <img src={GIT} alt="img" className="skills-img"></img>
                            <img src={GITHUB} alt="img" className="skills-img"></img>
                            <img src={HTML} alt="img" className="skills-img"></img>
                            <img src={JAVA} alt="img" className="skills-img"></img>
                            <img src={JS} alt="img" className="skills-img"></img>
                            <img src={JSON} alt="img" className="skills-img"></img>
                            <img src={MySql} alt="img" className="skills-img"></img>
                            <img src={REACT} alt="img" className="skills-img"></img>
                            <img src={SPRING} alt="img" className="skills-img"></img>

                        </div>
                        <button id="links">
                            <a href="https://linkedin.com/in/ryanskyoshimura" target="_blank">
                                <img className="linkBtn" src={linkedIn} alt="img" />
                            </a>
                            <a href="https://github.com/RSKYoshi" target="_blank">
                                <img className="linkBtn" src={github} alt="img" />
                            </a>
                            <a href="https://alumni.codeup.com/students/1605" target="_blank">
                                <img className="linkBtn" src={alumniPage} alt="img" />
                            </a>
                        </button>

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

