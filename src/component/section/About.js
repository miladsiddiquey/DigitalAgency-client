import React from 'react';
import '../../style/About.css';
import AboutImg from '../../images/about.PNG';

const About = () => {
    return (
        <>
            <section>
                <div class="container">
                    <div class="row align-items-center ">
                        <div class="col-md-6 d-flex justify-content-center">
                            <img src={AboutImg} alt="" class="img-fluid"/>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <div>
                                <h6 class="fw-bold text-danger">About us</h6>
                                <h2 class="text-capitalize">we are here<br/> for business solution idea</h2>
                                <p class="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae labore, ab repellendus sequi illum rerum molestiae facere numquam voluptatem nesciunt fugiat animi velit ad aliquid commodi distinctio doloremque autem error placeat perspiciatis saepe nam. Nulla?</p>
                                <button class="btn btn-success pe-5 ps-5 pt-2 pb-2   border-danger text-white bg-danger mt-3"> Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;