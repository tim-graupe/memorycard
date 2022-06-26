import React, { Component, useState } from "react";
import logoArray from "./logos";
import "../style.css";
import App from "./App";
import _ from "lodash";

export default function LevelOne(props){
    // const {logoArray} = props;
    const shuffledArray = _.shuffle(logoArray)

    
    const [teamOne, setTeamOne] = useState(shuffledArray[0]);
    const [teamTwo, setTeamTwo] = useState(shuffledArray[1]);
    const [teamThree, setTeamThree] = useState(shuffledArray[2])
    const [teamFour, setTeamFour] = useState(shuffledArray[3])
    const [teamFive, setTeamFive] = useState(shuffledArray[4])
    const [teamSix, setTeamSix] = useState(shuffledArray[5])
    const [teamSeven, setTeamSeven] = useState(shuffledArray[6])
    const [teamEight, setTeamEight] = useState(shuffledArray[7])



    return (
    <div>

        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamOne.img} />
        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamTwo.img} />
        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamThree.img} />
        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamFour.img} />
        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamFive.img} />
        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamSix.img} />
        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamSeven.img} />
        <img onClick={props.incrementScore} alt="logo" className="logos" src={teamEight.img} />

    </div>
    )
}