import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';
import CurrentEventDetails from "../components/CurrentEventsDetails/CurrentEventDetails"
import EventsDetails from '../components/EventsDetails/EventsDetails';
// import EventsDetails from '../components/EventsDetails/EventsDetails';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                 <Hero/>
                <CurrentEventDetails/>
                <EventsDetails/> 
                {/* test */}
            </div>
         );
    }
}
 
export default Home;