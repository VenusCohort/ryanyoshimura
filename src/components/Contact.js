import React, {Component} from 'react';
import "../styling/Contact.css";
import yoshiProfilePic from '../img/ryan.png'


export class Contact extends Component{

    render() {
        function btnAction(){
            // TODO: need to target button using virtual DOM for a sweet css effect.
        }
        return (
            <div id="contact-background">
                <main id="main-container">
                    <div id="infoContainer">
                        {/*<div id="container-etc"></div>*/}
                        <form method="post">
                            <img id="yoshi-img" src={yoshiProfilePic} alt="img" />
                            <br/><br/>
                            <span>
                                Hi There! Send me an email and I will get right back to you. <br/><div>Mahalo!</div>
                            </span>
                            <br/><br/>
                            <div id="email-container">
                                <span>
                                <label htmlFor="name">Name </label>
                                <input type="text" name="name"/>
                            </span>
                                <br/><br/>
                                <span>
                                <label htmlFor="email">Email &nbsp;</label>
                                <input type="text" name="email"/>
                            </span>
                                <br/><br/>
                                <span>
                                <label htmlFor="message">Message &nbsp;</label>
                                <textarea name="message"/>
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


