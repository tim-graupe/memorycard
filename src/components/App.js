import React, { Component, useState } from "react";
import  logoArray from "./logos";
import LevelOne from "./LevelOne";

import "../style.css";
import _ from "lodash";

function App() {
  const shuffledArray = _.shuffle(logoArray)
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [teams, setTeams] = useState([shuffledArray[0], shuffledArray[1], shuffledArray[2], shuffledArray[3]])


  const handleClick = (e) => {

    setTeams(_.shuffle(teams))
    setScore(score + 1);
    if (score >= highscore) {
      setHighscore(highscore + 1);
    }
    if (score === 3) {
      setTeams([shuffledArray[0], shuffledArray[1], shuffledArray[2], shuffledArray[3], shuffledArray[4], shuffledArray[5], shuffledArray[6], shuffledArray[7]])
    }
  };



  
  return ( 
    <div className="App">
      <div className="bar">
        <p>Score: {score}</p>
        <p>High Score: {highscore}</p>
      </div>
      <div className="logoContainer">
      {teams.map((team) => {
        return <img className="logos"  key = {team.id} src={team.img} alt={team.id} onClick={(e) => handleClick(e)}/>
      })}
      </div>
    </div>
  );
}

export default App;
