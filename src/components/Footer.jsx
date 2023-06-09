import React from 'react'
import logo11 from "../img/logo_11.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className="footer">
            <footer>
                <div className="overlay"></div>
                <div className="container text-white py-5">
                    <div className='footer_logo_div'>
                    <div className="footer_logo">
                        <img src={logo11} alt="" />
                    </div>


                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
                            <i className="footer_title">Quick Links</i>
                            <ul className="list-group">
                                <a href="/"><li className="">Home</li></a>
                                <Link to="/about-us"><li className="">About</li></Link>
                                <Link to="/programs"><li className="">Program</li></Link>
                                <a href=""><li className="">Gallery</li></a>
                                <a href=""><li className="">Technical Team</li></a>
                                <Link to="/contact-us"><li className="">Contact</li></Link>
                                <a href=""><li className="">Privecy Policy</li></a>
                                <a href=""><li className="">Refund Policy</li></a>
                                <a href=""><li className="">Terms and Conditions</li></a>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mt-4 mt-lg-0">
                            <i className="footer_title">Our Programs</i>
                            <ul className="list-group">
                                <a href=""><li className="">Academy Traning</li></a>
                                <a href=""><li className="">School/Univercity Coaching And Scholarship Program</li></a>
                                <a href=""><li className="">Age Wisw Progression</li></a>
                                <a href=""><li className="">Summer Camp</li></a>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mt-lg-0">
                            <i className="footer_title">Contect Details</i>
                            <ul className="list-group footer_contect">
                                <p>Chetna Vihar, Bommasandra</p>
                                <p>Industrial Area, Vinayak Nagar</p>
                                <p>Banglore - 560099</p>
                                <p>(+91) 95917 69293</p>
                                <p>(+91) 95910 69293</p>
                                <p>coaching@bangaloresuperstrikersfc.com</p>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mt-4 mt-lg-0">
                            <i className="footer_title">Free Consultation & Trials</i>

                            <div className="footer_trials_no">
                                <p> <span><i className="fas fa-phone"></i></span> 95910 69293</p>
                            </div>
                            <p>BSSFC is champ in providing its users with absolutely everthing a football club needs.</p>
                        </div>

                    </div>
                    <div className="social_icon mt-3">
                        <div className="social_icon_bg">
                            <a style={{color:"black"}} href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>

                        <div className="social_icon_bg">
                            <a style={{color:"black"}} href="https://twitter.com/i/flow/login">
                            <i className="fab fa-twitter"></i>
                            </a>
                        </div>

                        <div className="social_icon_bg">

                            <a style={{color:"black"}} href="https://www.instagram.com/?hl=en">
                            <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>

                        <div className="social_icon_bg">
                            <a style={{color:"black"}} href="https://in.linkedin.com/">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>

                        {/* <div className="social_icon_bg">
                            <i className="fab fa-facebook-f"></i>
                        </div> */}

                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer