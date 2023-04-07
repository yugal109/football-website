import React from 'react'
// import player1 from "../../img/player1"
import players from "../../img/players.png"
import player from "../../img/pls.jpg";
import player2 from "../../img/player2.jpg";

const Players = () => {
  return (

    <section className="players">
        <div className="players_title">
            players
        </div>

        <div className="container">
            <div className="row">
                <div>
                    <div className="players_content">
                        <img className='players_content_image' src={players} style={{width:800}}/>

                        {/* <div className="">
                            <div className="trapezoid_players">
                                <p className="senior">JUNIOR</p>
                                <p className="senior_plyR">PLAYERS</p>
                         
                                <img src={player2}/>
                            </div>
                        </div>

                        <div className="players_border">
                        </div>

                        <div className="">
                            <div className="trapezoid_players_left">
                                <p className="senior_left">SENIOR</p>
                                <p className="senior_plyR_left">PLAYERS</p>
                                <img src={player}/>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
        
    </section>

  )
}

export default Players