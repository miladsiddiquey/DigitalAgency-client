import React from 'react';
import '../../style/Service.css';
import ServiceImg1 from '../../images/t1.PNG'
import ServiceImg2 from '../../images/t2.PNG'
import ServiceImg3 from '../../images/t3.PNG'
import ServiceImg4 from '../../images/t4.PNG'
import ServiceImg5 from '../../images/t5.PNG'
import ServiceImg6 from '../../images/service-img.png'

const Service = () => {
    return (
        <section className="service_section">
        <div className="container">
            <div className="mt-5">
                <h6 className="text-center fw-bold text-danger">Service</h6>
            <h3 className="text-center">What We Offer</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis cumque velit aliquid dolores<br/> odio at distinctio cum dicta esse dignissimos?</p>
            </div>
            <div className="row  row-cols-sm-2 row-cols-md-5 row-cols-lg-5 mt-5 mb-5">
                <div className="mt-3 d-flex justify-content-center ">
                   <div className="text-center serv_box ">
                    <img src={ServiceImg1} alt="" className="img-fluid"/>
                    <h6>Seo Marketing</h6>
                   </div>
                </div>
                <div className="mt-3 d-flex justify-content-center  ">
                    <div className="text-center serv_box ">
                        <img src={ServiceImg2} alt="" className="img-fluid"/>
                        <h6>Email Marketing</h6>
                       </div>
                </div>
                <div className="mt-3 d-flex justify-content-center ">
                    <div className="text-center serv_box">
                        <img src={ServiceImg3} alt="" className="img-fluid"/>
                        <h6>Growth Hacking</h6>
                       </div>
                </div>
                <div className="mt-3 d-flex justify-content-center ">
                    <div className="text-center serv_box">
                        <img src={ServiceImg4} alt="" className="img-fluid"/>
                        <h6>Google PPC</h6>
                       </div>
                </div>
                <div className="mt-3 d-flex justify-content-center ">
                    <div className="text-center serv_box">
                        <img src={ServiceImg5} alt="" className="img-fluid"/>
                        <h6>Automation Setup</h6>
                       </div>
                </div>
            </div>
            <div className="row shadow p-4 align-items-center mb-5 ">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={ServiceImg6} alt="" className="img-fluid ms-5"/>
                </div>
                <div className="col-md-6 d-flex justify-content-center ">
                   <div className="me-5  ">
                    <h2>Search Engine Optimization</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias ratione non iure unde optio quibusdam doloremque in. Modi, tempora. Necessitatibus nisi quidem eos at dignissimos magnam cupiditate incidunt, illum excepturi! Eaque vel tempora consectetur?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil adipisci necessitatibus velit aperiam officiis suscipit?</p>
                    <button className="btn btn-success pe-5 ps-5 pt-2 pb-2  border-danger text-white bg-danger mt-3">Learn More</button>
                   </div>

                </div>
            </div>
    </div>
    </section>
    );
};

export default Service;