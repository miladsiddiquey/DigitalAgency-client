import React from 'react';
import CountUp from 'react-countup';
import '../../style/Counter.css';

const Counter = () => {
    return (
        <section>
            <div className="container">
                <div className="row 
            row-cols-md-4
            row-cols-lg-4
            col-rows-sm-2
            shadow
            mt-5
            mb-5
            p-4
            
            ">
                    <div className="col-6 mt-4 d-flex justify-content-center">
                        <div className="count  text-center">
                            <CountUp duration={10} end={40} className="counter_s"  />
                            <i class="fas fa-plus mt-2 ms-2 counter_s"></i>
                            <h5>Happy Clients</h5>
                        </div>
                       
                    </div>
                    <div className="col-6 mt-4 d-flex justify-content-center">
                        <div className="count text-center">
                            <CountUp duration={7} end={120} className="counter_s" />
                            <i class="fas fa-plus mt-2 ms-2 counter_s"></i>
                            <h5>Project Complate</h5>
                        </div>
                    </div>
                    <div className="col-6 mt-4 d-flex justify-content-center">
                    <div className="count text-center">
                            <CountUp duration={9} end={130} className="counter_s" />
                            <h5>Win Awards</h5>
                        </div>
                    </div>
                    <div className="col-6 mt-4 d-flex justify-content-center">
                    <div className="count text-center">
                            <CountUp duration={10} end={24} className="counter_s" />
                            <h5>Team Member</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;