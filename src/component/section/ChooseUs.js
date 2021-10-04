import React from 'react';
import '../../style/ChooseUs.css';
import ModelPart from './ModelPart';


const ChooseUs = () => {

    return (
        <section>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="text-uppercase text-danger">why choose Us</h6>
                        <h2>We create a curious BUZZ</h2>
                        <p>Contrary to popular belief, lorem ipsum is not simply random text. It has roots in a piece of classical Latinai literature from 45 BC.</p>
                        <div className="d-flex">
                            <i class="fas fa-circle mt-1 me-2 dot"> </i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fuga? Laborum, omnis alias.</p>
                        </div>
                        <div className="d-flex">
                            <i class="fas fa-circle mt-1 me-2 dot"> </i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fuga? Laborum, omnis alias.</p>
                        </div>
                        <div className="d-flex">
                            <i class="fas fa-circle mt-1 me-2 dot"> </i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fuga? Laborum, omnis alias.</p>
                        </div>
                        <button class="btn btn-success pe-5 ps-5 pt-2 pb-2   border-danger text-white bg-danger mt-3"> Discover More</button>
                    </div>
                    <div className="col-md-6">                      
                        <ModelPart/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;