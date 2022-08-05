import React, { useEffect, useState } from "react"

import Styles from "./ProgressBar.module.css"

const ProgressBar = (props) => {

    const [width, setwidth] = useState(0)

    useEffect(() => {
        setwidth(props.points/2 * 5)
    },[props.points]);

    return(
        <div className={Styles.progressBar} style={{width: width+'%'}}>
             <div className={Styles.teamName}>{props.teamName}</div>
             <img className={Styles.teamPic} src={props.teamImage} alt="Team pic" />
        </div>
    )
}

export default ProgressBar