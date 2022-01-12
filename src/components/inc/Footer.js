import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4" style={{textAlign:"center"}}>
                        <h6>Powered by:</h6>
                        <hr/>
                        <p className="text-white" style={{fontWeight:"bold"}}>
                        Muhammad Haseeb<br/><br/>
                        Varda Zunnoon<br/><br/>
                        Muhammad Faraz
                        </p>
                    </div>
                    <div className="col-md-4" style={{textAlign:"center"}}>
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/services">Services</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                    </div>
                    <div className="col-md-4 " style={{textAlign:"center"}}>
                        <h6>Contact Information</h6>
                        <hr/>
                        {/* <div><p className="text-white mb-1">#Pakistan #Karachi.</p></div> */}
                        <div><p className="text-white mb-1">+92 1234567899</p></div>
                        <div><p className="text-white mb-1">+92 1234567898</p></div>
                        <div><p className="text-white mb-1">+92 1234567897</p></div>
                        {/* <div><p className="text-white mb-1">email@domain.com</p></div> */}
                                  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;