//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react"
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import Buttons from "./Buttons"
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setScoreHome] = useState(0)
  const [scoreAway, setScoreAway] = useState(0)
  const [quarter, setQuarter] = useState(1)

  const touchdownHome = evt =>{
    setScoreHome(scoreHome + 7)
  }

  const fieldGoalHome = evt =>{
    setScoreHome(scoreHome + 3)
  }

  const touchdownAway = evt =>{
    setScoreAway(scoreAway + 7)
  }

  const fieldGoalAway = evt =>{
    setScoreAway(scoreAway + 3)
  }

  const quarters = evt =>{
    quarter === 4 ? setQuarter(quarter - 3) : setQuarter(quarter + 1)
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow scoreHome ={scoreHome} scoreAway={scoreAway} homeName={'Patriots'} awayName ={'Eagles'}/>
        <BottomRow quarter={quarter}/>
      </section>
      <Buttons touchdownHome={touchdownHome} fieldGoalHome={fieldGoalHome} touchdownAway={touchdownAway} fieldGoalAway={fieldGoalAway} quarters={quarters}/>
    </div>
  );
}

export default App;
