import React, { useEffect, useRef, useState } from "react";
import homagebanner from "../img/home_bannar.png";
import aboutbanner from "../img/about_us.jpg";
import contactbanner from "../img/contect.jpeg";
import logo11 from "../img/logo_11.png";
import programs from "../img/programs.png";
import techteam from "../img/technical_team.png"
import hambur from "../img/menu.png";
// import { slide as Menu } from 'react-burger-menu'
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/programs.css";


const NavBar = () => {
  const abc = useLocation();
  const [basicOpen, setBasicOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {setExpanded(expanded => !expanded)
    console.log("clicked")
  };
  const [location, setLocation] = useState("");
  const [img, setImage] = useState(null);
   const [show, setShow] = useState(true);

  useEffect(() => {
    if (abc.pathname == "/") {
      setLocation("home");
      setImage(homagebanner);
    } else if (abc.pathname.slice(1, abc.pathname.length) == "about-us") {
      setLocation("aboutus");
      setImage(aboutbanner);
    } else if (abc.pathname.slice(1, abc.pathname.length) == "contact-us") {
      setLocation("contactus");
      setImage(contactbanner);
    } else if (abc.pathname.slice(1, abc.pathname.length) == "programs") {
      setLocation("programs");
      setImage(programs);
    } 
  else if (abc.pathname.slice(1, abc.pathname.length) == "technical-team") {
      setLocation("technical-team");
      setImage(techteam);
    } 


    else {
      setImage(homagebanner);
    }
    // setShow(false);
        //  window.scrollTo(0, 0)show


    const a=document.getElementsByClassName('offcanvas offcanvas-end show')[0];
    const b=document.getElementsByClassName('navbar-toggler')[0];
    if(a){
      // setTimeout(()=>{
        if(a.classList.contains("show"))
        {
          b.click();
        }


        // if(b.classList.contains("show"))
        // {
          // a.click();
        // }
      // },[300])
    }


  }, [abc]);

  return (
    <div className="home_main">
      <div className="header">
        <div style={{ zIndex: 100 }} className="header_logo">
          <Link to="">
            <img style={{marginLeft:20,marginTop:10}} src={logo11} alt="" />
          </Link>
        </div>

        <>
        {/* <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle onClick={() => setShow(!show)} aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className={show ? 'show' : ''}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
          {/* {[false].map((expand) => ( */}

            <Navbar
              bg="light"
              expand={expanded}
              className="mb-3 bm-burger-button"
            >
              <Container fluid>
                <Navbar.Toggle
                  // aria-controls={`offcanvasNavbar-expand-${expanded}`}
                  // onClick={handleTdudeoggle}
                />
                <Navbar.Collapse id="basic-navbar-nav"  className="show">

                <Navbar.Offcanvas
                  style={{ marginTop: "5rem", backgroundColor: "#11133c" }}
                  // id={`offcanvasNavbar-expand-${expanded}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expanded}`}
                  placement="end"
                >
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Link to="" className="menuLinkColor">
                        <p>Home</p>
                      </Link>
                      <Link to="/about-us" className="menuLinkColor">
                        <p>About Us</p>
                      </Link>
                      <Link to="/contact-us" className="menuLinkColor">
                        <p>Contact US</p>
                      </Link>
                      <Link to="/programs" className="menuLinkColor">
                        <p>Programs</p>
                      </Link>
                      <Link to="/technical-team" className="menuLinkColor">
                        <p>Technical Team</p>
                      </Link>


                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Navbar.Collapse>
        
              </Container>
            </Navbar>
          {/* ))} */}
        </>

        <div style={{ zIndex: 10 }} className="menus">
          <Link to="" className="menuLinkColor">
            <p>Home</p>
          </Link>
          <Link to="/about-us" className="menuLinkColor">
            <p>About Us</p>
          </Link>
          <Link to="/programs" className="menuLinkColor">
            <p>Program</p>
          </Link>

          <p>Blog</p>
          <p>Gallery</p>
          <Link to="/technical-team" className="menuLinkColor">
          <p>Technical Team</p>
          </Link>


          <p>Foundation</p>
          <Link to="/contact-us" className="menuLinkColor">
            <p>Contact US</p>
          </Link>
        </div>
      </div>
      <section className="bannar">
        {location && location == "home" ? (
          <div class="gfg">
          <img className="program_image" src={img} alt="" />
          <div className="first-txt">
          <div className="bannar_text_home">
                 {/* <h1>Lorem ipsum dolor sit amet</h1> */}
                 <p>
                 Welcome to 
                 {" "}
                 <span className="bannar_text_home_bold">
                   Bangalore Super Strikers Football Club,
                  </span>
                 <br/>
                  where we unleash your inner champion and 
                  <br/>
                 help you take your game to the next level 
                 <br/>
                 with the ultimate training experience.
                  <br/>
                  </p>
              <button>Join Now</button>
              </div>
          </div>
         

        </div>
          // <div className="bannar_main">
          //   <div className="bannar_img">
          //     <div className="bannar_text_home">
          //       <h1>Lorem ipsum dolor sit amet</h1>
          //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          //       <button>Join Now</button>
          //     </div>
          //     {img && <img className="large_nav_image" src={img} alt="" />}
          //   </div>
          // </div>
        ) : location == "programs" ? (
          <div class="gfg">
            <img className="program_image" src={img} alt="" />
            {/* <h1 class="first-txt">
             PROGRAM 
          </h1> */}
          </div>
        ) : (
          <img className="large_nav_image" src={img} alt="" />
        )}
      </section>
      <div className="after_res_img">{img && <img src={img} alt="" />}</div>
    </div>
  );
};

export default NavBar;

// function OffcanvasExample() {
//   return (

//     </>
//   );
// }

// export default OffcanvasExample;
