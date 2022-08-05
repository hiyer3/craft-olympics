import React from "react"
import { Grid } from '@mui/material'

import Styles from "./SingleLeaderboardMember.module.css"

const SingleLeaderboardMember = (props) => {

    return (
        <div className={Styles.SingleTeamMember}> 
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    { props.description ? <h2 className={Styles.title}>{props.teamName}</h2> : <h2>{props.teamName}</h2>}
                </Grid>
                <Grid item xs={12}>
                    { props.description ? <h1 className={Styles.title}>{props.gamesPlayed}</h1> : <h1>{props.gamesPlayed}</h1>}
                </Grid>
                <Grid item xs={12}>
                    { props.description ? <h1 className={Styles.title}>{props.gamesWon}</h1> : <h1>{props.gamesWon}</h1>}
                </Grid>
                <Grid item xs={12}>
                    { props.description ? <h1 className={Styles.title} style={{lineHeight: '1.60em'}}>{props.points}</h1> : <h1>{props.points}</h1>}
                </Grid>
            </Grid>
        </div>

    )
}

export default SingleLeaderboardMember