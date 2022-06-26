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
    const [teamNine, setTeamNine] = useState(shuffledArray[8]);
    const [teamTen, setTeamTen] = useState(shuffledArray[9]);
    const [teamEleven, setTeamEleven] = useState(shuffledArray[10])
    const [teamTwelve, setTeamTwelve] = useState(shuffledArray[11])
    const [teamThirteen, setTeamThirteen] = useState(shuffledArray[12])
    const [teamFourteen, setTeamFourteen] = useState(shuffledArray[13])
    const [teamFifteen, setTeamFifteen] = useState(shuffledArray[14])
    const [teamSixteen, setTeamSixteen] = useState(shuffledArray[15])



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