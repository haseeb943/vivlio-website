import React from 'react';
import VMC from '../pages/VMV';
import flow from '../iamges/flow.JPG';
import flow2 from '../iamges/flow2.JPG';
import otp from '../iamges/otp.JPG';

function About() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home /  About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">Vivlio Purpose</h5>
                    <div className="underline"></div>
                    <p>
                        Book Exchange System” is developed by using React Native. The aim of this project was to provide the use of application and technologies together by developing a mobile application which made use of both. The specific function of this application was to allow a Bahria University students and staff to share books related to desired field or interest from their fellows easily. They can quickly get the book at minimum cost and can fetch from the designated counter or anywhere to their ease. It also provide the platform to sell books. Multiple payment methods will be provided for conveniences. <br /><br />
                        A separate list for the selling and renting list will be provided. A proper admin panel monitoring for renting and selling books with history of rented and available books will be provided. It will also have a rating system for the books, which will be based from 0 to 5 star based on rating done by the buyer and the renter. Any query of the user will be handled by the admin by using the reporting system. Anything related to the application will be handled by the admin from the user side. To make this application user friendly we have also used the request option through which when a user find the book of their choice they can request the seller or rental, and seller has an option to accept or to request. <br /><br />
                        Vivlio-Book Exchange System will provide a single platform to sell books to all and rent books to students and staff. It will make it easy for students to interact with each other. For any problem users will be having choice “Report” through which their issues can become solved or answered by the admin and for admin an admin panel is also designed through which admin can control all the users, books, payment, billing and categorization. Overall, Vivlio is all about books a single platform to cover selling, renting and buying all through single ID. Vivlio will have books related to education, Law, Thesis, novels, Urdu novel, intellectual books and poetry. <br /><br />
                        It is accepted that practically all the applications have to target that can be completed within the time frame. In today’s world we have moved toward the advancement of technology related to everything or all fields. Moving towards progress of on book exchange system for students and staff of Bahria University.The Scope of the project is based on the Bahria University student for the renting option. Other the selling option is for everyone. It will be having a proper stock management system which will be handled by the admin. Admin can enhance apprise and delete the users and books.  Users are provided with the secured login. <br /><br />
                        Having a platform to share books in itself it has benefit, it will be cost efficient, easy and exciting. These applications has provided an automated system for a manual book swapping which will ease the process. Books you will exchange will not be new but will be best if you swap with the other book. In exchange of the book you have already read and used you will get another new book to read.
                        The available book will be displayed and you can rent a book of your choice. Based on author, subject and title. It will make the task easy and you will have multiple options to select. It is accepted that all the applications initiated have some drawbacks which need to be processed in order get a complete project. The strategies to handle this application is basic and standard no problem will be faced by consumers.

                    </p>
                    <br />
                    <div className='pics' style={{ display: 'flex', justifyContent: 'center' ,flexWrap:'wrap'}}>
                        <div>
                            <h4 style={{ textAlign: 'center' }}>User For Bahrians </h4>
                            <img  width="400px" style={{objectFit:'contain'}}
                                // className="d-block w-100"=
                                src={flow}
                                alt="Second slide"
                            />
                        </div>
                        <div>
                            <h4 style={{ textAlign: 'center' }}>Public Users</h4>
                            <img  width="400px" style={{objectFit:'contain'}}
                                // className="d-block w-100"=
                                src={flow2}
                                alt="Second slide"
                            />
                        </div>

                    </div>

                </div>
                <br/>
                <div className="container">
                    <h5 className="main-heading" style={{fontSize:"32px"}}>Security</h5>
                    <br/>
                    {/* <div className="underline"></div> */}
                    <p>
                        Security is an important part of application development just like that we have focused on providing the security to our users. Application need to create a user ID and password to use the application. It helps to maintain the security and privacy issues. Every user have their own Personal ID which cannot be get accessed by others without password.<br/><br/>
                        In order to keep your ID secure you have to keep your password safe. The service method used is success when the resulted answers are accordingly if not it is considered fail. Security plays an important role which need to be keep the first priority while designing the project. If you have a very attractive UI without security it fails the project.
                    </p>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <h6 style={{ textAlign: 'center' }}>Here is the flow of our Application Security Process. </h6>
                            <img  width="400px" style={{objectFit:'contain'}}
                                // className="d-block w-100"=
                                src={otp}
                                alt="Second slide"
                            />
                        </div>
                       

                    </div>

                </div>
            </section>

            {/* Our vision, mission and values */}
            <VMC />

        </div>
    );
}

export default About;