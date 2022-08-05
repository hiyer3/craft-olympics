import React from "react"
import Captain from "../Captain/Captain"
import ChartLine from "../ChartLine/ChartLine"

import Styles from "./Track.module.css"

const Track = (props) => {

    return(
        <>
            <div className={Styles.track}>
                {
                    props.playingTeams ? Object.values(props.playingTeams).map((singleTeam, key) => (
                        <Captain key={key} teamName={singleTeam.teamName} points={singleTeam.teamPoints} teamImage={singleTeam.teamImage} />
                    )):<h2>Match Setting in Progress</h2>
                }
                <ChartLine/>
            </div>
        </>
    )
}

export default Track