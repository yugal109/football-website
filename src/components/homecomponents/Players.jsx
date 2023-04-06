import React from 'react'
// import player1 from "../../img/player1"
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

                        <div className="">
                            <div className="trapezoid_players">
                                <p className="senior">SENIOR</p>
                                <p className="senior_plyR">PLAYERS</p>
                                {/* hello */}
                                {/* <img src={player1}/> */}
                                <img src={player2}/>
                            </div>
                        </div>

                        <div className="players_border">
                        </div>

                        <div className="">
                            <div className="trapezoid_players_left">
                                <p className="senior_left">JUNIOR</p>
                                <p className="senior_plyR_left">PLAYERS</p>
                                <img src={player}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    </section>

  )
}

export default Players