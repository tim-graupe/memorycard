import React, { Component, useEffect, useState } from "react";
import logoArray from "./logos";
import "../style.css";
import App from "./App";
import _ from "lodash";

export default function LevelOne(){
    const shuffledArray = _.shuffle(logoArray)
    

    const [teams, setTeams] = useState([shuffledArray[0], shuffledArray[1], shuffledArray[2], shuffledArray[3]])
    console.log(shuffledArray)

    // const changeClicks = () => {
    //     setTeams
    // }
 
    return (
    <div>
        <img src={teams[0].img} alt="logo" className="logos"/>
        <img src={teams[1].img} alt="logo" className="logos"/>
        <img src={teams[2].img} alt="logo" className="logos"/>
        <img src={teams[3].img} alt="logo" className="logos"/>

    </div>
    )
}