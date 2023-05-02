import React from "react";
import "../css/tech_team.css";
import check from "../img/check.png"
import refree from "../img/refree.png";
import rect from "../img/rect.png"

const TechnicalTeam = () => {
  return (
    <>
      <div>
        <div className="top_part">
          <div className="top_part_first">
            BSSFC PROVIDES FOOTBALL SKILL DEVELOPMENT THROUGH AN EXPERTISE TRAINING IN A PROFESSIONAL WAY. WE HAVE DEDICATED TEAM AND CERTIFIED TRAINERS, AND A COURTEOUS STAFF TO PROVIDE BEST TRAINING FOR THE PLAYERS.
          </div>

          <div className="top_part_second">
            The training framework is developed and administered by our President.
          </div>
          <img  className="top_part_image" src={refree}/>

          <div className="top_part_third">
            <div>He is a Referee of KARNATAKA STATE FOOTBALL FEDERATION</div>
            <div> and All India Football Federal D License Coach.</div>
          </div>

          <div className="top_part_fourth">
            <div>

              All our other D License coaches are also experienced, well trained and
            </div>
            <div>
              certified by All India Football Federation.
            </div>
          </div>

          <div className="top_part_fifth">
            <div>"GET TRAINED UNDER CERTIFIED COACHES TO BE A </div>
            <div>SUCCESSFUL PLAYER."</div>
          </div>

          <div className="top_part_sixth">
            A SECURE CAMPUS FOR STUDENT ATHLETE DEVELOPMENT
          </div>

          <div className="top_part_seventh">
            <div>
              In the light of the current pandemic situation, BSSFC will follow all the safety measures for a safe and secure campus for players and staff This focuses on teaching the fundamental techniques of game and showing players how to master these into skills made for junior players with a fun and friendly atmosphere, the focus is on developing motor skills while increasing the mastery over the ball. Individual skills are taught to the players in order to effectively compete with the opponent and start group activities with co-players that includes co-operative and competitive drills. This focuses on teaching the fundamental techniques of game and showing players how to master these into skills made for junior players with a fun and friendly atmosphere, and the aim is to develop motor skills while increasing the mastery over the ball.
            </div>
          </div>
          <div className="top_part_eighth">
            <div className="top_part_eighth_list">

              <div>
                <img style={{ width: 40, height: 40, marginRight: 10 }} src={check} />
                We sanitize our campus on regular basis.
              </div>

              <div>
                <img style={{ width: 40, height: 40, marginRight: 10 }} src={check} />
                Testing of all staff and players on campus.
              </div>

              <div>
                <img style={{ width: 40, height: 40, marginRight: 10 }} src={check} />
                Temperature checking for each player.
              </div>

              <div>
                <img style={{ width: 40, height: 40, marginRight: 10 }} src={check} />
                We provide hand sanitizer to every player and staff.
              </div>


              <div>
                <img style={{ width: 40, height: 40, marginRight: 10 }} src={check} />
                Strictly restricted for outsiders.
              </div>



            </div>
            <div className="top_part_eighth_img">
              <img className="top_part_eighth_img_real" src={rect}/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalTeam;
