import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import VMC from '../pages/VMV';
import Services from '../pages/Services';

function Home() {
    return (
        <div>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Purpose</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            This application is based on providing a service of renting and selling books for students of Bahria University. Provide the platform to share books with each other with minimum cost and secured sharing. Anticipating the resale of books in not a simple task to be performed. It requires sufficient information on the grounds that the worth of trade of books with the various elements related to it.                             </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our vision, mission and values */}
            <VMC />

            {/* Our Services */}
            <Services />


        </div>
    );
}

export default Home;