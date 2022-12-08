import React, {Component} from 'react';
import {useState, useEffect} from "react";
import {PropTypes} from 'prop-types';
import "../styling/Home.css";


function Fader({text}) {

    console.log(text)
    // const array = ["Ryan Yoshimura", "Full Stack Developer"];

    //for css fade transitions
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    //toggle between words
    const [changeName, setChangeName] = useState(true);

    //use effect is for rendering
    useEffect(() => {
        function myLoop() {
            setTimeout(function() {
                setTimeout(function(){
                    setChangeName(prevState => !prevState)
                },4000) //after x seconds, change text
            }, 300)
        }
        myLoop();                   //  start the loop
    })

useEffect(() =>{
        // function devInfoTransitions(){
        //     setInterval(devInfoText,5500) //every 4 seconds, run myLoop
        // }

        // const timeout = setInterval( () =>{
        //     if (fadeProp.fade === 'fade-in'){
        //         setFadeProp({
        //             fade: 'fade-out'
        //         })
        //     }else {
        //         setFadeProp({
        //             fade: 'fade-in'
        //         })
        //     }
        // }, 2000);
        // return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <>
            {changeName ?
                (<div className={fadeProp.fade}>Ryan Yoshimura</div>)
                : (<div className={fadeProp.fade}>Full Stack Developer</div>)
            }
            {/*<div className={fadeProp.fade}>{text}</div>*/}
        </>
    )
}
// Fader.defaultProps = {
//     text: "Ryan Yoshimura"
// //    need to display different texts here
// //    loop through different strings here?
// }
// Fader.propTypes = {
//     text: PropTypes.string
// }
export default Fader;

//this