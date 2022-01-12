/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../iamges/logo1.png';

const Navbar = () => {
    return (
        <>

            <div className="navbar-dark bg-dark shadow" >
                <div className="container" >
                    <div className="row">

                        <div className="">
                            <nav className="navbar navbar-expand-lg" >
                                <div className="container-fluid">
                                    <NavLink className="navbar-brand" to="/">
                                        <h4>VivliOo</h4>  
                                        {/* <img height="40px" width="80px"
                                            // className="d-block w-100"
                                            src={logo}
                                            alt="First slide"
                                        /> */}
                                    </NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: "auto" }}>
                                            <li className="nav-item">
                                                <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName='menu_active' className="nav-link" to="/services">Services</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;