import React from 'react'
import "../css/contect.css"

const ContactUs = () => {
  return (
    <section className="contect-page">

        <div className="conct_page_title" >
            Contact Us
        </div>

        <div className="footer_img">
            {/* <!-- <img src="images/h-dark-parallax.jpg" alt=""> --> */}
            <div className="container footer_text text-white">
                <div className="row justify-content-center">

                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <div className="p-4 contect_block">
                            <div className="resp">
                                <div className="col-lg-3 col-md-4 col-sm-12 text-center ">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-12">

                                    <h6>Phone :</h6>
                                    <p><a href="tel:+2001025178918">+20 010 2517 8918</a></p>
                                    <p><a href="tel:+2001025178918">+20 010 2517 8918</a></p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <div className="p-4 contect_block">

                            <div className="resp">
                                <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-12">

                                    <h6>Address :</h6>
                                    <p>3rd Avenue, East Side</p>
                                    <p>San Francisco</p>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <div className="p-4 contect_block">
                            <div className="resp">

                                <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-12">

                                    <h6>Phone :</h6>
                                    <p><a href="mailto:contact@youradress.com">contact@youradress.com</a></p>
                                    <p><a href="mailto:contact@youradress.com">contact@youradress.com</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="contect">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236213.5020563334!2d73.03299843922385!3d22.322042478705878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1645181584582!5m2!1sen!2sin"

                            width="100%" height="100%"  loading="lazy"></iframe>

                    </div>
    
                    <div className="col-lg-6 col-sm-12 mt-5">
                        <div className="contect_form">
                            <div className="pricing_heading mb-5">
                                <h2 className="upper_heading">Get</h2>
                                <h2 className="head_border"> <span> In Touch</span></h2>
                            </div>
    
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="text" placeholder="Name" className="w-100"/>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="email" placeholder="Email" className="w-100"/>
                                </div>
                            </div>
    
                            <div className="row mb-3">
                                <div className="col-12">
                                    <input type="text" placeholder="Subject" className="w-100"/>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-12">
                                    <textarea name="Massage" id="" cols="30" placeholder="Massage" rows="5" className="w-100"></textarea>
                                </div>
                            </div>
    
                            <div className="row my-5">
                                <div className="col-12 text-center">
                                    <button type="submit">Send Massage</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </section>



  )
}

export default ContactUs