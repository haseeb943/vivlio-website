import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (

        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home /  Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">                       
                                <div className="col-md-4 border-start">
                                        <h5 className="main-heading">Information</h5>
                                        <div className="underline "></div>
                                        <p>
                                            Karachi, Pakistan
                                        </p>
                                        <p>
                                            Muhammad Haseeb
                                        </p>
                                        <p>
                                            Phone: +92 1234567899
                                        </p>
                                        <p>
                                            Email: haseeb12@gmail.com
                                        </p>
                                </div>
                                <div className="col-md-4 border-start">
                                        <h5 className="main-heading">Information</h5>
                                        <div className="underline "></div>
                                        <p>
                                            Karachi, Pakistan
                                        </p>
                                        <p>
                                            Varda Zunnoon
                                        </p>
                                        <p>
                                            Phone: +92 1234567898
                                        </p>
                                        <p>
                                            Email: varda12@gmail.com
                                        </p>
                                </div>
                                <div className="col-md-4 border-start">
                                        <h5 className="main-heading">Information</h5>
                                        <div className="underline "></div>
                                        <p>
                                            Karachi, Pakistan
                                        </p>
                                        <p>
                                            Muhammad Faraz
                                        </p>
                                        <p>
                                            Phone: +92 1234567897
                                        </p>
                                        <p>
                                            Email: faraz12@gmail.com
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Contact;