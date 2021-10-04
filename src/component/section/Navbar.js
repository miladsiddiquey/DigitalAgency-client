import React from 'react';
import '../../style/Navbar.css';
import Logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar_bg navbar-light navbar-transparent ">
            <div className="container">
                <a className="navbar-brand fw-bold  text-white" href="#"><img src={Logo}  alt="logo" className="top_logo"/> Digi</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto  fw-bold">

                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#">contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;