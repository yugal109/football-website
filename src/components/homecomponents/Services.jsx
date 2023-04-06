import React from 'react'
import trained_coach from "../../img/TRAINED COACHES-01-01-01.png"
import spacious from "../../img/SPACIOUS GREEN GR01JND__-01-01.png"
import exclusively from "../../img/EXCLUSIVELY TRAINING-01-01.png"
import personal_training from "../../img/PERSONAL TRAINING-01-01.png"


const Services = () => {
  return (
    <section className="services">
    <div className="container">
    <div style={{marginBottom:60}} className="players_title">
        what we offer
        </div>

        <div className="row">
            
            <div className="col-12 col-md-6 service_block ">
                <div className="trapezoid_for_title_up">
                </div>
                <p className="services_title" >Trained coaches</p>
                <div className="trapezoid_for_title_down">
                </div>
                <div className="service_image p-3">
                    <img src={trained_coach} alt=""/>
                </div>
            </div>
    
            <div className="col-12 col-md-6 service_block ">
                <div className="trapezoid_for_title_up">
                </div>
                <p className="services_title" >Spacious green ground</p>
                <div className="trapezoid_for_title_down">
                </div>
                <div className="service_image p-3">
                    <img src={spacious} alt=""/>
                </div>
            </div>
    
            <div className="col-12 col-md-6 pt-5 service_block ">
                <div className="trapezoid_for_title_up">
                </div>
                <p className="services_title" >Exclusively training</p>
                <div className="trapezoid_for_title_down">
                </div>
                <div className="service_image p-3">
                    <img src={exclusively} alt=""/>
                </div>
            </div>
    
            <div className="col-12 col-md-6 pt-5 service_block ">
                <div className="trapezoid_for_title_up">
                </div>
                <p className="services_title" >1:1 personal training</p>
                <div className="trapezoid_for_title_down">
                </div>
                <div className="service_image p-3">
                    <img src={personal_training} alt=""/>
                </div>
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default Services