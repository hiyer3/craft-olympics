import React from "react"
import ChequredFlag from "./race-flag-13.gif"
import Styles from "./ChartLine.module.css"

const ChartLine = () => {

    return(
        <div className={Styles.chartLine}>
    
            <img src={ChequredFlag} className={Styles.ChequredFlag} alt="chequred flag" />
        </div>
    )
}

export default ChartLine