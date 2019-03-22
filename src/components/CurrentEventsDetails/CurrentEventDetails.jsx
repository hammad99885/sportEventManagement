import React, { Component } from "react";
import { CurrentEvents } from "../../Services/Events";
import $ from "jquery"
import ScoringDetails from "./scoringDetails";

class CurentEventDetails extends Component {
  state={
    events : CurrentEvents[CurrentEvents.length -1]
  }

  counter = 0;
  componentDidMount(){

    let eventChangeTimer = (bool)=>{
      if(bool === true){
        var eveInt = setInterval(
          ()=>{
          $("#CED").fadeOut(100)
          setTimeout(()=>{
              const events = CurrentEvents[this.counter];
            this.setState({events});
            console.log(this.state.events)
            console.log(this.counter)
            this.counter = this.counter + 1;
            if(this.counter == CurrentEvents.length ){
              this.counter = 0;
            }
            $("#CED").fadeIn();
          },110)
          
        },
        8000)
      }else if(bool === false){
        clearInterval(eveInt);
      }
    }
    
    document.addEventListener("load", function(){
      eventChangeTimer(true)
    })

    document.addEventListener("visibilitychange", function() {
      console.log(document.hidden, document.visibilityState);
      if(document.hidden=== true){
        eventChangeTimer(false);
      }else if(document.hidden === false){
        eventChangeTimer(true);
      }
    }, false);
  }


  render() {
    const { events } = this.state;
    return (

      <div  className="CED boderBottom">
      
        <div id="CED" className="fullWidthRow text-light text-center">
          <div className="col-1o3">
            <h4>Ongoing Events</h4>
            <p>{events.eventName}</p>
          </div>
          <div className="col-1o3">
            <div>
              <h4>{events.teams.firstTeam} vs {events.teams.secondTeam}</h4>
              <p>{events.shortDesc}</p>
            </div>
          </div>
          <div className="col-1o3">
            <ScoringDetails eventType={events.eventtype} status={events.currentStatus} teams={events.teams} />
          </div>
        </div>
      </div>
    );
  }
}

export default CurentEventDetails;
