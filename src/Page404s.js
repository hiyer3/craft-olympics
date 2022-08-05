import { Grid } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const  Page404s = () => {


    return(
        <Grid container spacing={2} justifyContent={"center"}> 
            <Grid item xs={8} style={{textAlign: 'center', paddingTop: '20%'}}>
                <h1>404 Page</h1>
                <h3>
                    The link you clicked may be broken or the page may have been removed.
                </h3>
                <p>
                    Visit the <Link to={'/'} key={'1'}>homepage</Link> here.
                </p>
            </Grid> 
        </Grid>
    )
} 

export default Page404s 