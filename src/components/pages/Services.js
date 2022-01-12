import React from 'react';
import { Link } from 'react-router-dom';

import login_img from '../iamges/login.JPG';
import reg_img from '../iamges/reg.JPG';
import u_profile from '../iamges/u_profile.JPG';
import drawer from '../iamges/sidebar.JPG';
import feed from '../iamges/feed.JPG';
import d_book from '../iamges/d_book.JPG';
import wishlist from '../iamges/wishlist.JPG';
import otp_screen from '../iamges/otp_screen.JPG';
import req_noti from '../iamges/req_noti.JPG';

function Services(){
    return(
        <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <p>Here is the some screens of Vivlio you can see and get it some info about Application.</p>
                            <div className="underline mx-auto"></div>
                        </div>

                        <div className="col-md-4" style={{marginBottom:"40px"}}>
                            <div className="card shadow">
                                <img height="450px" src={login_img} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Login Screen</h6>
                                    <div className="underline"></div>
                                    <p>Mobile application login screen which carry options like to login by using Facebook and Google account. Those without account can also create their id by selecting the option given at the bottom.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img height="450px" src={reg_img} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Register Screen</h6>
                                    <div className="underline"></div>
                                    <p>New user can register Vivlio app by providing the required information. Those email phone numbers and registered Bahria ID cannot be registered again. Even users cannot have same username as well.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img height="450px" src={otp_screen} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Security Verification Screen</h6>
                                    <div className="underline"></div>
                                    <p>While sign in an OTP verification will be generated on the cell phone number to verify the number if the otp code is not provided a user will not be able to register into Vivlio. Providing a valid phone number is important to use.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{marginBottom:"40px"}}>
                            <div className="card shadow">
                                <img height="450px" src={u_profile} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>User Profile Screen</h6>
                                    <div className="underline"></div>
                                    <p>Vivlio has a user profile screen which has a separate list of renting and selling books. By using profile user can have a counted books and rating by others and can delete add and update the books details easily.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img height="450px" src={drawer} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Drawer</h6>
                                    <div className="underline"></div>
                                    <p>For the user easiness a side panel is provided which carry a shortcuts to the most required details. Admin can access the profile, categories, and request list, setting and all just through side panel easily.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img height="450px" src={feed} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Home Screen</h6>
                                    <div className="underline"></div>
                                    <p>After login Home screen will appear first which carry a list of books based on categories, related books most liked books of Vivlio users for the Bahria and for public user home screen will be different which will show only the selling books.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img height="450px" src={wishlist} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Wishlist</h6>
                                    <div className="underline"></div>
                                    <p>Wish list screen is provided which will carry a list of books user wants to read in future. An option at the bottom of every book is given through which a user can add his favourite book to the wish list. </p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img height="450px" src={d_book} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Book Detail Screen</h6>
                                    <div className="underline"></div>
                                    <p>This Screen shows the details of books shared by the user. The purpose of the books as well. Category of the books and author name as well. Will show a list of related books with it at the bottom.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img height="450px" src={req_noti} className="w-100 border-bottom" alt="Services" />
                                <div className="card-body">
                                    <h6>Request Notification Screen</h6>
                                    <div className="underline"></div>
                                    <p>For renting Bahria Students have an option to accept and reject the rent request by the other user based on their dates and rating of the users. User have an option to whom they want to rent their books to.</p>
                                    <Link to="/about" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    );
}

export default Services;