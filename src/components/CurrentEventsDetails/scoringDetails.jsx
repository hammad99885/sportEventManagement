import React, { Component } from 'react';

const ScoringDetails = ({eventType, status, teams}) => {
    
    if(eventType === "Circket"){
        return(
            <div className="recordContainer">
             
             <div className="record">
               <div>Current Score</div>
               <div className="whiteRecContainer bg-light text-dark">{status.currentScore}</div>
             </div>
             <div className="record">
               <div>Remaning overs</div>
               <div className="whiteRecContainer bg-light text-dark">{status.remaningOvers}</div>
             </div>
             <div className="record">
               <div>Required Score</div>
               <div className="whiteRecContainer bg-light text-dark">{status.requiredRuns}</div>
             </div>
           </div>
        )
    }else if(eventType === "Football"){
        return(
            <div className="recordContainer">
             
             <div className="record">
               <div>{teams.firstTeam}</div>
               <div className="whiteRecContainer bg-light text-dark">{status.team1Goals} goal</div>
             </div>
             <div className="record">
               <div>{teams.secondTeam} </div>
               <div className="whiteRecContainer bg-light text-dark">{status.team2Goals} goal</div>
             </div>
             <div className="record">
               <div>Time Remaning</div>
               <div className="whiteRecContainer bg-light text-dark">{status.timeRemaning}</div>
             </div>
           </div>
        )
    }
}
 
export default ScoringDetails;