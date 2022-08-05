import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import Track from '../Track/Track'
import Leaderboard from '../Leaderboard/Leaderboard';
import socketClient from "socket.io-client";

import t1 from "./assets/Layle.gif"
import t2 from "./assets/Sinead.gif"
import t3 from "./assets/Wes.gif"
import t4 from "./assets/JM.gif"
import t5 from "./assets/BD.gif"

import craftOlympicsLogo from "./assets/Olympics-Logo-White-02.png"

import Styles from './Stage.module.css'

const Stage = () => {

    const [teams, setTeams] = useState({
        0: {
            teamName: "Geek Skwad",
            teamPoints: 0,
            teamImage: t5,
            gamesPlayed: 0,
            gamesWon: 0,
        },
        1: {
            teamName: "DC Justice League",
            teamPoints: 0,
            teamImage: t4,
            gamesPlayed: 0,
            gamesWon: 0,
        },
        2: {
            teamName: "Craftzilla",
            teamPoints: 0,
            teamImage: t3,
            gamesPlayed: 0,
            gamesWon: 0,
        },
        3: {
            teamName: "807",
            teamPoints: 0,
            teamImage: t2,
            gamesPlayed: 0,
            gamesWon: 0,
        },
        4: {
            teamName: "CRAFTO Libre",
            teamPoints: 0,
            teamImage: t1,
            gamesPlayed: 0,
            gamesWon: 0,
        },
    });

    const SERVER = "https://craft-olympics.herokuapp.com/";
    const socket = socketClient(SERVER, {
        transports: ['websocket']
    });

    useEffect(() => {

        socket.on('connection', (socket) => {
            console.log(`I'm connected with the back-end`)
        });

        socket.on("sheetData", (data) => {
            if(!data.key){
                let dataArr = Object.keys(data)[0].substring(2, Object.keys(data)[0].length - 2).split(",")
                let teamName = dataArr[0].substring(1, dataArr[0].length - 1)
                let points = dataArr[1]
                let gamesPlayed = dataArr[2]
                let gamesWon = dataArr[3]

                //console.log(teamName, points)

                setTeams(prevTeam => {
                    let newTeam = { ...prevTeam };

                    Object.values(prevTeam).forEach((singleTeam, index) => {

                        if (singleTeam.teamName === teamName) {
                            
                            newTeam[index].teamName = singleTeam.teamName
                            newTeam[index].teamPoints = points
                            newTeam[index].teamImage = singleTeam.teamImage
                            newTeam[index].gamesPlayed = gamesPlayed
                            newTeam[index].gamesWon = gamesWon

                        } else {

                            newTeam[index].teamName = singleTeam.teamName
                            newTeam[index].teamPoints = singleTeam.teamPoints
                            newTeam[index].teamImage = singleTeam.teamImage
                            newTeam[index].gamesPlayed = singleTeam.gamesPlayed
                            newTeam[index].gamesWon = singleTeam.gamesWon

                        }

                    })

                    return (prevTeam, newTeam)
                })
            }else{
                console.log("socket data", data)
            }
        });

        socket.on("connect_error", (error) => {
            console.log(`socket error`, error)
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };

    },[socket])

    useEffect(()=>{

        const fetchData = async () => {
            await fetch('https://script.google.com/macros/s/AKfycbzQfjtAOkRGNxseLayb1mCgz2qtPGiwE72GeCpBZW0NCHHrD49KXLPCCEvHt2eQ0RhKpA/exec').then(function(response){
                return response.json()
            }).then(function(data) {
                console.log(data) 
                setTeams(prevTeam => {
                    let newTeam = { ...prevTeam };


                    Object.values(prevTeam).forEach((singleTeam, index) => {
                        newTeam[index].teamName = data['data'][index+1].team
                        newTeam[index].teamPoints = data['data'][index+1].points
                        newTeam[index].teamImage = singleTeam.teamImage
                        newTeam[index].gamesPlayed = data['data'][index+1].gamesPlayed
                        newTeam[index].gamesWon = data['data'][index+1].gamesWon
                    })

                    return (prevTeam, newTeam)
                })
            
            })
            
        }

        fetchData()
            .catch(console.error);
    },[])


    return (
        <>
            <div className={Styles.grass_background}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, lg: 2 }}>
                    <Grid item xs={12} style={{height: '30vh'}}>
                        <Leaderboard playingTeams={teams} />
                    </Grid>
                    <Grid item xs={12} style={{height: '65vh'}}>
                        <Track playingTeams={teams} />
                    </Grid>
                </Grid>
                <img src={craftOlympicsLogo} alt="Craft Olympics Logo" className={Styles.logo} />
            </div>
        </>
    )
}

export default Stage