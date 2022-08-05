import React from "react"
import ProgressBar from "../ProgressBar/ProgressBar"

import Styles from "./Captain.module.css"

const Captain = (props) => {

    return(
        <div className={Styles.captain}>
            <ProgressBar teamName={props.teamName} points={props.points} teamImage={props.teamImage} />
        </div>
    )
}

export default Captain