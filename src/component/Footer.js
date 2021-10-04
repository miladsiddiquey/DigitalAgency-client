import React from 'react';
import '../style/Footer.css';
import Logo from '../images/logo.png';

const Footer = () => {
    // const footerData = [
    //     {
            
    //         "title":"Digi Marketing",
    //         "brand":"digi",
    //         "detail":"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam.",
    //     },
    //     {
    //         "title":"contact",
    //         "detail":"250 northern blwd suite 3254-1033 albany,ny 124-1200",
    //         "phone":"01799748096",
    //         "location":"contact us",
    //         "icon1":  <i class="fas fa-phone-alt"></i>,
    //         "icon2": <i class="fas fa-map-marker"></i>
    //     },
    //     {
    //         "title":"viewer guides",
    //         "menu1":"feature",
    //         "menu2":"careers",
    //         "menu3":"blog post",
    //         "menu4":"help & support",
    //     },
    //     {
    //         "title":"community",
    //         "menu1":"about us",
    //         "menu2":"our clients",
    //         "menu3":"legal notice"           
    //     },
    // ]
    return (
        <>
            <div className="footer">
            <div className="container">
                <div className="row row-cols-md-4 row-cols-lg-4 row-cols-sm-2 footer_info">
                   <div className="col-6 d-flex justify-content-center">
                      <div>
                      <div className="d-flex">
                           <img src={Logo} alt="" className="img-fluid" style={{width:"30px", height:'30px'}}/>
                           <h3>Digi</h3>
                       </div>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto odio reprehenderit fugiat aspernatur quaerat voluptatibus quidem enim iure recusandae?</p>
                      </div>
                   </div>
                   <div className="col-6 d-flex justify-content-center">
                       <div>
                       <h3>Contact</h3>
                       <p>250 northern blwd suite 3254-1033 albany,ny 124-1200</p>
                       <h6><i class="fas fa-phone-alt"></i> +8801799748096</h6>
                       <h6><i class="fas fa-map-marker"></i> Contact us</h6>
                       </div>
                   </div>
                   <div className="col-6 d-flex justify-content-center">
                      <div>
                      <h3>Viewer Guides</h3>
                       <h6>Feature</h6>
                       <h6>Careers</h6>
                       <h6>Blog Post</h6>
                       <h6>Help&Support</h6>
                      </div>
                   </div>
                   <div className="col-6 d-flex justify-content-center">
                      <div>
                      <h3>Community</h3>
                       <h6>About Us</h6>
                       <h6>Our Clients</h6>
                       <h6>Legal Notice</h6>
                      </div>
                   </div>
                   
                </div>
                </div>
                </div>
                <div className="footer_bottom">
                    <p className="text-center">&copy;2021 Develop by Milad Siddiquey</p>
                </div>
            
        
        </>
    );
};

export default Footer;