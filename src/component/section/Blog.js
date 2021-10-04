import React from 'react';
import '../../style/Blog.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Blog = () => {

    const blogData = [
        {
            "date": "October 3 2021",
            "title": "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            "img": "https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg"
        },
        {
            "date": "October 3 2021",
            "title": "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            "img": "https://i.ibb.co/ZSMgxz4/pots-716579-1280-750x406.jpg"
        },
        {
            "date": "October 3 2021",
            "title": "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            "img": "https://i.ibb.co/nz7XLL8/croissants-569075-1280-750x406.jpg"
        }
    ]

    const options = {
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 4000,
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
            <div className="row">
                <div className=" text-center mb-4">
                    <h6 className="text-danger">Blog</h6>
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Dolorum quasi numquam laudantium possimus reprehenderit?</p>
                </div>
               
                <OwlCarousel className='owl-theme'  {...options}>
                {
                    blogData.map((blog, index) => {
                        return (
                            <div key={index} className="me-4 mb-5">
                            <div className="infoAll">
                                <img src={blog.img} alt="" className="img-fluid " />
                                <div className="infoTitle">
                                    <p>{blog.date}</p>
                                    <h5>{blog.title}</h5>
                                    <div className="d-flex mt-4">
                                        <p>Read More</p>
                                        <i class="fas fa-share-alt ms-auto"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </OwlCarousel>








                {/* {
                    blogData.map((blog, index) => {
                        return (
                         
                            <div key={index} className="col-md-4 mb-5">
                                <div className="infoAll">
                                    <img src={blog.img} alt="" className="img-fluid " />
                                    <div className="infoTitle">
                                        <p>{blog.date}</p>
                                        <h5>{blog.title}</h5>
                                        <div className="d-flex mt-4">
                                            <p>Read More</p>
                                            <i class="fas fa-share-alt ms-auto"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        )
                    })
                } */}
                
            </div>
        </section>
    );
};

export default Blog;