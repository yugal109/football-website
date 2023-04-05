import React, { useEffect, useRef, useState } from 'react'
import homagebanner from "../img/home_bannar.png"
import aboutbanner from "../img/about_us.jpg"
import logo11 from "../img/logo_11.png"
import hambur from "../img/menu.png"
import { slide as Menu } from 'react-burger-menu'
import { Link, useLocation, useParams } from 'react-router-dom'

const Navbar = () => {

    const abc = useLocation()
    console.log(abc);
    const [location, setLocation] = useState("")
    const [img, setImage] = useState(null)
    useEffect(() => {
        if (abc.pathname == "/") {
            setLocation("home")

        }
        else {

            setLocation(abc.pathname.slice(1, abc.pathname.length))
        }
        if ((abc.pathname.slice(1, abc.pathname.length)) == "about-us") {
            setImage(aboutbanner)
        }
        else {
            setImage(homagebanner)
        }
    }, [abc])

    return (
        <div className="home_main">

            <div className="header">

                <div className="header_logo">
                    <Link to="">
                    <img src={logo11} alt="" />
                    </Link>

                </div>
                {/* <Menu right customBurgerIcon={<img src={hambur} />} className="menu_list">
                    <div className="menus">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Program</p>
                        <p>Blog</p>
                        <p>Gallery</p>
                        <p>Technical Team</p>
                        <p>Foundation</p>
                        <p>Contact US</p>
                    </div>
                </Menu> */}
                <div className="menus">
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Program</p>
                    <p>Blog</p>
                    <p>Gallery</p>
                    <p>Technical Team</p>
                    <p>Foundation</p>
                    <p>Contact US</p>
                </div>
            </div>
            <section className="bannar">
                {location && location == "home" ?
                    <div className="bannar_main">
                        <div className="bannar_img">
                            <div className="bannar_text_home">
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <button>Join Now</button>
                            </div>
                            {img &&
                                <img className="large_nav_image" src={img} alt="" />
                            }

                        </div>

                    </div>
                    : <>

                        <img className="large_nav_image" src={img} alt="" />
                    </>


                }


            </section>
            <div className="after_res_img">
                <img src={homagebanner} alt="" />
            </div>
        </div>
    )
}

export default Navbar