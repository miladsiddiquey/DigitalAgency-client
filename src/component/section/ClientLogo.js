import React from 'react';
import '../../style/ClientLogo.css';
import Clogo1 from '../../images/l1.PNG';
import Clogo2 from '../../images/l2.PNG';
import Clogo3 from '../../images/l3.PNG';
import Clogo4 from '../../images/l4.PNG';
import Clogo5 from '../../images/l5.PNG';

const ClientLogo = () => {
    return (
        <>
            <div className="container">
                <section className="shadow p-5  mb-5">
                    <h6 className="text-center fw-bold">Trusted by over <span className="text-danger">12,045+</span> happy customers, including</h6>
                    <div className="row  row-cols-sm-2 row-cols-md-5 row-cols-lg-5 ">
                        <div className="col-6 d-flex justify-content-center mt-4"><img src={Clogo1} alt="" className="img-fluid"/></div>
                        <div className="col-6 d-flex justify-content-center mt-4"><img src={Clogo2} alt="" className="img-fluid"/></div>
                        <div className="col-6 d-flex justify-content-center mt-4"><img src={Clogo3} alt="" className="img-fluid"/></div>
                        <div className="col-6 d-flex justify-content-center mt-4"><img src={Clogo4} alt="" className="img-fluid"/></div>
                        <div className="col-6 d-flex justify-content-center mt-4"><img src={Clogo5} alt="" className="img-fluid"/></div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ClientLogo;