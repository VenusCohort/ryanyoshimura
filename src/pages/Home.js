import logo from '../logo.svg'
import React, {Component} from 'react';
import "../styling/Home.css";
import surf from '../img/duck-dive.jpg'


export class Home extends Component{
    render() {
        function changeBackground(e) {
            e.target.style.backgroundColor = 'transparent';
        }
        function revertBackground(e){
            e.target.style.backgroundColor = 'black';
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
                                    <img src={surf} alt="img" className="img"/>
                                    <div className="img-overlay project-text-color" onMouseOver={changeBackground} onMouseLeave={revertBackground}>
                                        <div className="project-text">PROJECT 3</div>
                                    </div>                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base2" className="grid-base">
                                    <img src={surf} alt="img" className="img"/>
                                    <div className="img-overlay project-text-color" onMouseOver={changeBackground} onMouseLeave={revertBackground}>
                                        <div className="project-text">PROJECT 3</div>
                                    </div>                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base3" className="grid-base">
                                    <img src={surf} alt="img" className="img"/>
                                    <div className="img-overlay project-text-color" onMouseOver={changeBackground} onMouseLeave={revertBackground}>
                                        <div className="project-text">PROJECT 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className="base-container">
                                <div id="grid-base4" className="grid-base">
                                    <img src={surf} alt="img" className="img"/>
                                    <div className="img-overlay project-text-color" onMouseOver={changeBackground} onMouseLeave={revertBackground}>
                                        <div className="project-text">PROJECT 3</div>

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


