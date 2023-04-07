import React from 'react'
import "../css/about.css"
import football from "../img/football.png"
import scr from "../img/soccer-jersey.png"
import sports from "../img/sports.png"
import sch from "../img/scholarship.png"
import fd from "../img/founder_bg.png"
import ceo from "../img/ceo.jpeg"
import vision from "../img/vision.png"
import mission from "../img/mission.png"

const AboutUs = () => {
    return (
        <section class="about">
            
            <div class="about_title">
                THE <br /> <span>Club</span>
            </div>

            <p class="about_text">
                Affiliated to Karnataka State Football Association, Bangalore Super Strikers is a football club founded by Mr Devraj and Mrs Rajammal. It is presently being run by its president Mr Ramakrishna D. The club strives to help players reach their maximum potential at higher levels of football, such as the state level and national levels.
            </p>
            <div className="players_title_about">
                four heads
            </div>
            <div class="container-fluid">
                <div class="row about_block_row">
                    <div class="col-3 about_block">
                        <div class="about_block_bg">
                            <div class="about_block_bg_icon">
                                <img src={football} alt="" />
                            </div>
                            <h2 class="about_block_title">Lorem Impus</h2>
                            <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="col-3 about_block">
                        <div class="about_block_bg">
                            <div class="about_block_bg_icon">
                                <img src={scr} alt="" />
                            </div>
                            <h2 class="about_block_title">Lorem Impus</h2>
                            <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="col-3 about_block">
                        <div class="about_block_bg">
                            <div class="about_block_bg_icon">
                                <img src={sports} alt="" />
                            </div>
                            <h2 class="about_block_title">Lorem Impus</h2>
                            <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="col-3 about_block">
                        <div class="about_block_bg">
                            <div class="about_block_bg_icon">
                                <img src={sch} alt="" />
                            </div>
                            <h2 class="about_block_title">Lorem Impus</h2>
                            <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>


            <section class="founder_massage">
                <div class="founder_bg">
                    <img src={ceo} className='founder_bg_img' alt="" />
                    <div class="founder_massage_text">
                        <h2>FOUNDER'S MESSAGE</h2>
                        <p class="founder_msg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat neque, tempus sagittis tincidunt ac, interdum in mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id ipsum et elit egestas commodo sed faucibus nisl. Etiam a convallis nisi. Ut ultricies porttitor rhoncus. Integer ac diam sit amet enim dignissim porttitor. Pellentesque tempus mattis magna, et dictum libero vulputate nec.
                        </p>
                        <p class="founder_name_left">-
                            MR. PRABHU
                        </p>
                    </div>
                </div>
            </section>


            <div id="parallelogramLeft">
                <div class="about_trio_titles">
                    <p>VISION</p>
                </div>
            </div>
            <div class="vision_text">
                <div class="vision_text_left">
                    <p>
                        Our vision is to create awareness about football and support each individual by providing on opportunity to showcase their skills and excel in the field. We offer high-quality training in a friendly yet challenging environment those who aspire to become world-class footballers
                    </p>
                </div>
                <div class="vision_text_right">
                    <div class="vision_right_img">
                        <img src={vision} alt="" />
                    </div>
                </div>
            </div>

            <div id="parallelogramRight" class="about_mission">
                <div class="about_trio_titles">
                    <p>MISSION</p>
                </div>
            </div>
            <div class="mission_text">
                <div class="vision_right_img">
                    <img src={mission} alt="" />
                </div>

                <div class="mission_text_right">
                    <div class="Mission_text_left">
                        <p>
                            Our mission is to popularise football by producing well-trained players. We want to help players reach peak levels of performance through a good foundation and sporting spirit, maintain high standards of excellence, and produce talented champions for the country.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs