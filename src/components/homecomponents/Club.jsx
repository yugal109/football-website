import React from 'react'

const Club = () => {
  return (
    <section className="club">
    <div className="club_title">
        CLUB PLAYERS
    </div>

    <div className="club_content">
        <div className="container">
            <div className="news_blog">
                <div className="row">
                    <div className="col-lg-4 text-center mb-14">
                        <div className="position-relative club_block">
                            <p className="club_block_number">01</p>
                        </div>
                        <p className="club_player_name">Player Name</p>
                    </div>
                    
                    <div className="col-lg-4 text-center mb-14">
                        <div className="position-relative club_block">
                            <p className="club_block_number">02</p>
                        </div>
                        <p className="club_player_name">Player Name</p>
                    </div>

                    <div className="col-lg-4 text-center">
                        <div className="position-relative club_block">
                            <p className="club_block_number">03</p>
                        </div>
                        <p className="club_player_name">Player Name</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    
</section>
  )
}

export default Club