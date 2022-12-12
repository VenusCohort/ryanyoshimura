// import React, {Component} from 'react';
import "../styling/Contact.css";
import yoshiProfilePic from '../img/ryan.png'
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';
import {render} from "react-dom";



// export class Contact extends Component{
export const Contact = () => {

    // render() {
        // const sendGridApi = require('@sendgrid/mail');
        // ${sendGridApi}
        function btnAction(){
            // TODO: need to target button using virtual DOM for a sweet css effect.
        }
        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('emailJS_API', 'template_v1', form.current, '2t7z2dIDEmHxJdPXm')
                .then((result) => {
                    console.log(result.text);
                    console.log("message sent");
                    e.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        };
        return (
            <div id="contact-background">
                <main id="main-container">
                    <div id="infoContainer">
                        {/*<div id="container-etc"></div>*/}
                        <form ref={form} onSubmit={sendEmail}>
                            <img id="yoshi-img" src={yoshiProfilePic} alt="img" />
                            <br/><br/>
                            <span>
                                Hi There! Send me an email and I will get right back to you. <br/><div>Mahalo!</div>
                            </span>
                            <br/><br/>
                            <div id="email-container">
                                <span>
                                <label htmlFor="name">Name </label>
                                <input className="input-form-lengths" type="text" name="visitor_name"/>
                            </span>
                                <br/><br/>
                                <span>
                                <label htmlFor="email">Email &nbsp;</label>
                                <input className="input-form-lengths" type="text" name="visitor_email"/>
                            </span>
                                <br/><br/>
                                <span>
                                <label htmlFor="message">Message &nbsp;</label>
                                <textarea id="message-area" name="message"/>
                            </span>
                                <br/><br/>
                                <span id="submit-button-wrapper">
                                <input onClick={btnAction} type="submit"/>
                            </span>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
    )
    }



