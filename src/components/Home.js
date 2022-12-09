import React, {Component} from 'react';
import "../styling/Home.css";
import surf from '../img/duck-dive.jpg'
import tsumamiLandingBg from '../img/landingPage-bg.jpeg'
import konami from '../img/konamilogo2.webp'
import weatherBg from '../img/weather-background.jpg'
import coffee from '../img/coffeeBG.png'

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

import {useState} from "react";
import Fader from "./Fader";

let devInfo;





export class Home extends Component{
    render() {
        function goToLinkTsumami(e) {
            window.open('https://www.tsumami.cooking:8080/landing', '_blank', "noopener noreferrer");
        }
        function goToLinkWeatherMap(e) {
            window.open('https://chase-forestello.github.io/weathermap/', '_blank', "noopener noreferrer");
        }
        function goToLinkKonamiCode(e) {
            window.open('https://rskyoshi.github.io/konami-code/', '_blank', "noopener noreferrer");
        }
        function goToLinkCoffeeProject(e) {
            window.open(' https://rskyoshi.github.io/coffee-benjamin-ryan/', '_blank', "noopener noreferrer");
        }
        window.setTimeout(devInfoTransitions,0); //on window load, after x sec, start devInfoTransitions(which starts a 4 sec timer)

        function devInfoText(){
            devInfo = document.querySelector("#devInfo");
            // devInfo.style = "animation: fadeIn 2s;"
            // devInfo.innerHTML = "Yoshimura Designs";



            // devInfo.style = "animation: fadeOut 2s;"





            // devInfo.innerHTML = "Ryan Yoshimura";
            // devInfo.innerHTML = "Full Stack Developer";
            // do {
            // let i = 1;                  //  set your counter to 1
            function myLoop() {         //  create a loop function
                setTimeout(function() {   //  call x sec setTimeout when the loop is called
                    // devInfo = document.querySelector("#devInfo");
                    //need to toggle texts here
                    setTimeout(function(e){
                        // devInfo.style = "color: yellow"
                        // devInfo.style = "animation: fadeOut 2s;"
                        // devInfo.innerHTML = "Full Stack Developer";




                    },2000) //after 2 seconds, change text
                    // if(devInfo.innerHTML === "Ryan Yoshimura"){
                    //     devInfo.innerHTML = "Full Stack Developer"
                    // } else {
                    //     devInfo.innerHTML = "Ryan Yoshimura"
                    // }

                    // i++;                    //  increment the counter
                    // if (i < 10) {           //  if the counter < 10, call the loop function
                    //     myLoop();             //  ..  again which will trigger another
                    // }                       //  ..  setTimeout()
                }, 300)
            }
            myLoop();                   //  start the loop
        }









        function devInfoTransitions(){
            setInterval(devInfoText,5500) //every 4 seconds, run myLoop
        }

        //uncomment below for many bg image transitions
        // function changePicture(e){
            //put all images here, with each separated by a set time
            //img1
            //5
            //img2
            //img3
        // }
        // function backgroundTransition(e){
        //     //target bg here
        //     //need to set a timer for transition
        //     //if bg=currentBG, change it to the next one
        //     //repeat the cycle infinitely
        //     //or just have one bg, and do a slight zoom/movement like the japanese website
        //     //perhaps do an ocean image, then simulate a slow panning effect
        //
        //     let body = document.querySelector("body");
        //     // body.addEventListener("",)
        //     setInterval(changePicture,100)
        // }


        // const nav = document.querySelector(".nav")
        // window.addEventListener("scroll", function(){
        //     if(window.scrollY){
        //         nav.classList.add("hideNav")
        //     } else {
        //         nav.classList.remove("hide")
        //     }
        // })
        return (
            <div className="homePage">
                <header>

                    <div className="mainContainer">
                        {/*//every x seconds, change out the text here */}
                        <div id="devInfo">
                            <Fader/>
                        </div>
                        {/*<div><img className="reactLogo" src={logo} alt="img"></img></div>*/}
                        {/*<div><img className="reactLogo2"src="https://files.virgool.io/upload/users/24829/posts/m0a581jdk8zj/30ovzh9b1xr0.jpeg" alt="img"></img></div>*/}
                        <div id="project-grid-base">
                            <div className="base-container">
                                <div id="grid-base1" className="grid-base">
                                    <img src={tsumamiLandingBg} alt="img" className="projects-img"/>
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkTsumami}>
                                        <div className="project-text">
                                            <h2 className="project-title-text">TSUMAMI</h2>
                                            <p><h4>Meal planning app with recipe search and macros</h4></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base2" className="grid-base">
                                    <img src={weatherBg} alt="img" className="projects-img"/>
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkWeatherMap}>
                                        <div className="project-text">
                                            <h2 className="project-title-text">WEATHERMAP</h2>
                                            <p><h4>Weather forecast app with real-time data</h4></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base3" className="grid-base">
                                    <img src={konami} alt="img" className="projects-img"/>
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkKonamiCode}>
                                        <div className="project-text">
                                            <h2 className="project-title-text">KONAMI-CODE</h2>
                                            <p><h4>The original cheat-code for games!</h4></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base4" className="grid-base">
                                    <img src={coffee} alt="img" className="projects-img" />
                                    <div className="projects-img-overlay project-text-color" onClick={goToLinkCoffeeProject}>
                                        <div className="project-text">
                                            <h2 className="project-title-text">COFFEE-SELECTOR</h2>
                                            <p><h4>Simulate coffee grade selections</h4></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="skills">

                            {/*idea!! on hover, display icons in a movable sphere */}
                            <div className="img-container">
                                <img src={AJAX} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={CSS} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={GIT} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={GITHUB} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={HTML} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={JAVA} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={JS} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={JSON} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={MySql} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={REACT} alt="img" className="skills-img"></img>
                            </div>
                            <div className="img-container">
                                <img src={SPRING} alt="img" className="skills-img"></img>
                            </div>


                        </div>
                        <br/>
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
                <script src="jquery-3.6.1.min.js"></script>
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

