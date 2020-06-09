import React from "react";
import "./App.css";

const Buttons = props => {

    return (
        <section className="buttons">
        <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick={props.touchdownHome} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={props.fieldGoalHome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
            <button onClick={props.touchdownAway} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={props.fieldGoalAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="extraButtons">
            <button onClick={ props.quarters } className="awayButtons__touchdown">Change Quarter</button>
            <button onClick={ props.downs } className="awayButtons__touchdown">Change Downs</button>
        </div>
        </section>      
    );
};

export default Buttons;