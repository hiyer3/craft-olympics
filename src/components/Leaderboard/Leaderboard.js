import React from "react";
import SingleLeaderboardMember from "../SingleLeaderboardMember/SingleLeaderboardMember";
import Styles from "./Leaderboard.module.css"

const Leaderboard = (props) => {

    return(
        <div className={Styles.leaderboard}>
            <SingleLeaderboardMember key={'team'} teamName={'Team'} points={'Points'} gamesPlayed={'Games Played'} gamesWon={'Games Won'} description={true}/>
            {
                props.playingTeams ? Object.values(props.playingTeams).map((singleTeam, key) => (
                    <SingleLeaderboardMember key={key} teamName={singleTeam.teamName} points={singleTeam.teamPoints} gamesPlayed={singleTeam.gamesPlayed} gamesWon={singleTeam.gamesWon} />
                )) : <h2>Match Setting in Progress</h2>
            }
        </div> 
    )
}

export default Leaderboard 