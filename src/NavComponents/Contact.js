import React from "react";
import './contact.css';

const Contact=()=>{

    return(
        <div className="contact">

            <section className="contact-body">
                <div className="contact-header">
                    <h1>Welcome to My Page</h1>
                    <p>Strong understanding of software development life-cycle and best practices.
                        Design, develop, maintain and optimize secure and scalable multi-tier web applications.
                        6 months of experience in developing complex web-based SaaS product using
                        React.JS with thorough understanding of React.js framework Redux.
                        Must have built RESTful APIs based on NodeJS with HAPI framework and used tools like
                        Dream Factory / Swagger / Node Clinic.
                        Hands on experience with NoSQL database MongoDB. Must have experience in
                        performance analysis ; performance tuning and optimization of complex queries.
                    </p>
                </div>

                <div className="contact-details">

                    <div className="contact-info">
                        <div className="contact-address">
                            <div className="contact-location-icon"> 
                                    <i class="fa-solid fa-location-dot"></i>
                            </div> 

                            <div>
                                <b>Address</b>
                                <p>Manchirevula,500075,<br/>
                                    Narsingi,Hyderabad,<br/>
                                    Telangana,India
                                </p>
                            </div>

                        </div>
                        <div className="contact-phone">
                                <div className="contact-phone-icon"> 
                                    <i class="fa-solid fa-phone "></i>
                                </div>

                                <div>
                                    <b>Phone </b>
                                    <p>6303250895</p>
                                </div>
                        </div>
                        <div className="contact-email">
                                <div className="contact-email-icon"> 
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div>
                                    <b>Email </b>
                                    <p>ganeshweb63@gmail.com</p>
                                </div>
                        </div>

                    </div>

                    <div className="contact-form">
                        <form className="contact-form-form">
                            <h1 style={{color:"green", marginBottom:"10px"}}>Contact Us</h1>
                            <input type="text" placeholder="full name" />
                            <input type="email" placeholder="email" />
                            <textarea cols="20" rows="3" placeholder="type message" />
                            <button className="contact-send-btn">Send Message</button>
                            
                        </form>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Contact;