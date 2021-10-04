import React from 'react';
import '../../style/Banner.css';
import BannerImg from '../../images/banner-img.png';

const Banner = () => {
    return (
        <div>
            <>
            <div class="banner_bg">

                <div class="container">
                    <div class="row align-items-center pt-3 ">
                        <div class="col-md-6">
                            <h1 class="text-capitalize text-white"> we are the brilliants in<br/> terms of digital<br/> marketing</h1>
                            <h4 class ="mt-3 text-white">Book your 30-minute free strategy call</h4>
                            <button class ="btn btn-success pe-5 ps-5 pt-2 pb-2 fs-5 fw-bold border-danger text-dark bg-white mt-3">Book Now</button>
                            </div>
                            <div class ="col-md-6">
                            <img src={BannerImg} alt="" class ="img-fluid banner_img" />
                            </div>
                        </div>
                    </div>
                    <svg class="wavy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                        <path fill="#fff" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,165.3C672,149,768,107,864,80C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </>
        </div>
    );
};

export default Banner;