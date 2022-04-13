import React, { Component } from 'react';
import './contact.css';
 
class Contact extends Component {
    render() {
        return (
            <div className="card">
                <div className="container">
                    <div className="Titel">
                        Contact
                    </div>
                    <div className="conten">
                        <b>Developer :</b> AK Studio <br />
                        <b>Webiste   :</b> https://www.akscoding.com/ <br />
                        <b>Email     :</b> dev.akstudio@gmail.com <br />
                        <b>Owner     :</b> Maulana S H
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;