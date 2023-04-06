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
        THE <br/> <span>Club</span> 
    </div>
    <p class="about_text">damnLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis alias quibusdam modi magnam! Dolor iure tempore mollitia exercitationem expedita in, iste culpa quasi consequatur ipsum necessitatibus corrupti modi corporis beatae distinctio quaerat omnis aliquam, nisi quam, nam fugiat vitae hic nesciunt? Sunt libero quasi odit minima laboriosam eos perferendis non?</p>

    <div class="container-fluid">
        <div class="row about_block_row">
            <div class="col-3 about_block">
                <div class="about_block_bg">
                    <div class="about_block_bg_icon">
                        <img src={football} alt=""/>
                    </div>
                    <h2 class="about_block_title">Lorem Impus</h2>
                    <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div class="col-3 about_block">
                <div class="about_block_bg">
                    <div class="about_block_bg_icon">
                        <img src={scr} alt=""/>
                    </div>
                    <h2 class="about_block_title">Lorem Impus</h2>
                    <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div class="col-3 about_block">
                <div class="about_block_bg">
                    <div class="about_block_bg_icon">
                        <img src={sports} alt=""/>
                    </div>
                    <h2 class="about_block_title">Lorem Impus</h2>
                    <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div class="col-3 about_block">
                <div class="about_block_bg">
                    <div class="about_block_bg_icon">
                        <img src={sch} alt=""/>
                    </div>
                    <h2 class="about_block_title">Lorem Impus</h2>
                    <p class="about_block_details">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>


    <section class="founder_massage"> 
        <div class="founder_bg">
            <img src={ceo} className='founder_bg_img'  alt=""/>
            <div class="founder_massage_text">
                <h2>FOUNDER'S MASSAGE</h2>
                <p class="founder_msg">iure ipsa odio blanditiis porro assumenda cum cupiditate, fuga ad repudiandae assumenda veritatis sed iure.</p>
                <p class="founder_name_left">- Lorem Impus</p>
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
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, culpa esse. Porro deserunt voluptate obcaecati, corporis numquam soluta commodi. Voluptatibus quo vel minus quis hic, atque magnam. Quas reiciendis cum, in est exercitationem adipisci aperiam illo magni ducimus.</p>
        </div>
        <div class="vision_text_right">
            <div class="vision_right_img">
                <img src={vision} alt=""/>
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
            <img src={mission} alt=""/>
        </div>
        
        <div class="mission_text_right">
            <div class="Mission_text_left">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, culpa esse. Porro deserunt voluptate obcaecati, corporis numquam soluta commodi. Voluptatibus quo vel minus quis hic, atque magnam. Quas reiciendis cum, in est exercitationem adipisci aperiam illo magni ducimus.</p>
            </div>
        </div>
    </div>
  </section>
  )
}

export default AboutUs