import React, { Component } from "react";
import Hero from "../components/Hero/Hero";
import CurrentEventDetails from "../components/CurrentEventsDetails/CurrentEventDetails";
import EventsDetails from "../components/EventsDetails/EventsDetails";
import { EventDetils } from "../Services/Events";
// import EventsDetails from '../components/EventsDetails/EventsDetails';

class Home extends Component {
  state = {};
    
  // componentDidMount() {
  //   // fetch('https://localhost:5001/api/values', )
  //   // .then(res=> res.json)
  //   // .then(data=>console.log(data));

  //   fetch('http://localhost:3000')
  //     .then(res=> res.json())
  //     .then(data=>console.log(data));

  //     // console.log(JSON.stringify(EventDetils))
  // }
  render() {
    return (
      <div>
        <Hero />
        <CurrentEventDetails />
        <EventsDetails />
        {/* test */}
      </div>
    );
  }
}

export default Home;
