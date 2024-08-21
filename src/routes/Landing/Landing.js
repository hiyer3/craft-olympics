import React from "react";
import craftOlympicsLogo from "../../components/Stage/assets/craft-olympic-logo-new.png"
import t1 from "../../components/Stage/assets/Layle.gif"
import t2 from "../../components/Stage/assets/Sinead.gif"
import t3 from "../../components/Stage/assets/Wes.gif"
import t4 from "../../components/Stage/assets/JM.gif"
import t5 from "../../components/Stage/assets/BD.gif"

import Styles from "./Landing.module.css"
import { Link } from "react-router-dom";

const Landing = () => {
   
    return(
        <div className={Styles.landing}>
            <div className={Styles.logo}>
                <img src={craftOlympicsLogo} alt="Craft Olympics logo"/>
            </div>
            <div className={Styles.captains}>
                <div>
                    <img src={t1} alt="BD" />
                </div>
                <div>
                    <img src={t2} alt="JM" />
                </div>
                <div>
                    <img src={t3} alt="WB" />
                </div>
                <div>
                    <img src={t4} alt="SC" />
                </div>
                <div>
                    <img src={t5} alt="LN" />
                </div>
            </div>
            <div className={Styles.button}>
                <Link to="/">Let's Begin</Link>
            </div>
        </div>
    )
}

export default Landing