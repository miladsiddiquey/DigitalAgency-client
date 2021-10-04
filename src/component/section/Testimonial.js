import React from 'react';
import '../../style/Testimonial.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {

    const testimonial = [
        {
            "name": "Jon Do",
            "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quam! Dicta eveniet ",
            "info": "customer",
            "img": "https://i.ibb.co/bP2h94Q/as.png"
        },
        {
            "name": "Jon Do",
            "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quam! Dicta eveniet ",
            "info": "customer",
            "img": "https://i.ibb.co/bP2h94Q/as.png"
        },
        {
            "name": "Jon Do",
            "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quam! Dicta eveniet ",
            "info": "customer",
            "img": "https://i.ibb.co/bP2h94Q/as.png"
        },
        {
            "name": "Jon Do",
            "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quam! Dicta eveniet ",
            "info": "customer",
            "img": "https://i.ibb.co/bP2h94Q/as.png"
        },
        {
            "name": "Jon Do",
            "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quam! Dicta eveniet ",
            "info": "customer",
            "img": "https://i.ibb.co/bP2h94Q/as.png"
        },
        {
            "name": "Jon Do",
            "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quam! Dicta eveniet ",
            "info": "customer",
            "img": "https://i.ibb.co/bP2h94Q/as.png"
        },
        {
            "name": "Jon Do",
            "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quam! Dicta eveniet ",
            "info": "customer",
            "img": "https://i.ibb.co/bP2h94Q/as.png"
        },
    ]
    const options = {
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        loop: true,
        responsive: {
            1: { items: 1 },
            550: { items: 2 },
            786: { items: 3 },
            1200: { items: 3 }
        }
    };

    return (
        <section className="container">
            <div className="row ">
                <div className="text-center mb-4">
                <h6 className="text-danger ">Testimonial</h6>
                <h2>What our customers say</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quasi numquam laudantium,<br/> esse consequatur itaque repudiandae voluptatem, repellat at eius ex voluptas<br/> corrupti possimus reprehenderit?</p>
                </div>
                <OwlCarousel className='owl-theme'  {...options}>
                    {
                        testimonial.map((review, index) => {
                            return (
                                <div key={index} className="d-flex justify-content-around">
                                    <div key={index} className="card " style={{ width: '22rem' }}>
                                        <img src={review.img} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h6>{review.name}</h6>
                                            <p className="card-text">{review.review}</p>
                                            <h6 className="card-title">{review.info}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
            </div>
        </section>
    );
};

export default Testimonial;