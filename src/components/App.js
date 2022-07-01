import React, { Component, useState } from "react";
import  logoArray from "./logos";
import "../style.css";
import _, { pick } from "lodash";
const pickedTeams = []
function App() {
  const displayTeams = (num) => {
    let teams = []
    for (let i = 0; i < num; i++) {
      teams.push(shuffledArray[i])
    }
    return teams
  }

  const shuffledArray = _.shuffle(logoArray)
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [round, setRound] = useState(0)
  const [teams, setTeams] = useState(displayTeams(4))
  

  const clearArray = () => {
    while (pickedTeams.length > 0) {
      pickedTeams.pop()
    }

  }
  const newGame = () => {
    clearArray()
    setScore(0)
    setTeams(displayTeams(4))
  }

  const handleClick = (e) => {
    if (pickedTeams.includes(e.target.alt)){
      newGame()
      return
    }
    pickedTeams.push(e.target.alt)

    setTeams(_.shuffle(teams))
    setScore(score + 1);
    if (score >= highscore) {
      setHighscore(highscore + 1);
    }
    if (pickedTeams.length === 4 && score === 3) {
      setTeams(displayTeams(8))
      clearArray()

    }

    if (pickedTeams.length === 8 && score === 11) {
      setTeams(displayTeams(16))
      clearArray()
    }

    if (pickedTeams.length === 16 && score === 27) {
  
      setTeams(displayTeams(24))
      clearArray()
    }

    if (pickedTeams.length === 24 && score === 51) {
  
      setTeams(displayTeams(32))
      clearArray()
    }

    if (pickedTeams.length === 32){
      alert("You won! Great job.")
      newGame()
    }

    if (e.target.alt === "NYR"){
      console.log(">rags")
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
