import React from 'react'

const Achivements = () => {
  return (
    <section className="achievements">
    <div className="achievements_title">
        BSS FC’s Achievements
    </div>

    <div className="achievements_content">
        <div className="container">
            <div className="row">
                <div className="col-5 achievement_box">
                    <div className="achive_img">
                        <i className="fas fa-trophy achive_icon"></i>
                    </div>
                    <p className="achive_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, asperiores! Atque saepe odio quae neque ut, ullam eum.</p>
                    <button className="read_more_btn">Read More</button>
                </div>

                <div className="col-5 achievement_box">
                    <div className="achive_img">
                        <i className="fas fa-trophy achive_icon"></i>
                    </div>
                    <p className="achive_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, asperiores! Atque saepe odio quae neque ut, ullam eum.</p>
                    <button className="read_more_btn">Read More</button>
                </div>

                <div className="col-5 achievement_box">
                    <div className="achive_img">
                        <i className="fas fa-trophy achive_icon"></i>
                    </div>
                    <p className="achive_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, asperiores! Atque saepe odio quae neque ut, ullam eum.</p>
                    <button className="read_more_btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Achivements