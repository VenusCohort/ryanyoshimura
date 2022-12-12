import React, {Component} from 'react';
import "../styling/Contact.css";
import yoshiProfilePic from '../img/ryan.png'


export class Contact extends Component{

    render() {
        const sendGridApi = require('@sendgrid/mail');
        sendGridApi.setApiKey{
            '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'
        }
        function btnAction(){
            // TODO: need to target button using virtual DOM for a sweet css effect.
        }
        async function sendEmail(e){
            e.preventDefault();
            const formData = {}
            Array.from(e.currentTarget.elements).forEach(field => {
                if(!field.name) {
                    return;
                }
                formData[field.name] = field.value;
                }
            )
            console.log(formData);
        }
        return (
            <div id="contact-background">
                <main id="main-container">
                    <div id="infoContainer">
                        {/*<div id="container-etc"></div>*/}
                        <form method="post" onSubmit={sendEmail}>
                            <img id="yoshi-img" src={yoshiProfilePic} alt="img" />
                            <br/><br/>
                            <span>
                                Hi There! Send me an email and I will get right back to you. <br/><div>Mahalo!</div>
                            </span>
                            <br/><br/>
                            <div id="email-container">
                                <span>
                                <label htmlFor="name">Name </label>
                                <input className="input-form-lengths" type="text" name="name"/>
                            </span>
                                <br/><br/>
                                <span>
                                <label htmlFor="email">Email &nbsp;</label>
                                <input className="input-form-lengths" type="text" name="email"/>
                            </span>
                                <br/><br/>
                                <span>
                                <label htmlFor="message">Message &nbsp;</label>
                                <textarea id="message-area" name="message"/>
                            </span>
                                <br/><br/>
                                <span id="submit-button-wrapper">
                                <button onClick={btnAction}>
                                    Submit
                                </button>
                            </span>
                            </div>


                        </form>
                    </div>
                </main>
            </div>
    )
    }
}


