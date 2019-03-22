import React, { Component } from 'react';
import { EventDetils } from "../../Services/Events"
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const EventsDetails = () => {
    return (
        <div className="EVD pt-4 pb-4 " >
            <h2 className="display-4 width-100 text-light text-center mb-5">Featured Events</h2>

            <div className="container">
                <div className="row text-light">
                    <div className="col-md-4">
                        <h4 className="width-100 text-center mb-3">Previous Events</h4>
                        {EventDetils.previousEvents.map((item, i) => {
                            return (
                                <div key={i} className="cardCust" data-aos="fade-up" >
                                <Link to={"/eventDetail/" + item.id} className="text-light">
                                <h5>{item.eventName}</h5>
                                    <p>Descs: <small className=""> {item.evenShorDesc}</small></p>
                                    <p><small>{item.teams.teamOne} </small> VS <small> {item.teams.teamTwo}</small></p>
                                    <p>Date: <small className="mr-2">{item.timing.date}</small> Time: <small>{item.timing.time}</small></p>
                                </Link>
                                    
                                </div>
                            )
                        })}

                    </div>

                    <div className="col-md-4">
                        <h4 className="width-100 text-center mb-3">OnGoing Events</h4>

                        {EventDetils.onGoingEvents.map((item, i) => {
                            return (
                                <div key={i} className="cardCust" data-aos="fade-up" >
                                <Link to={"/eventDetail/" + item.id}  className="text-light">
                                <h5>{item.eventName}</h5>
                                    <p>Descs: <small className=""> {item.evenShorDesc}</small></p>
                                    <p><small>{item.teams.teamOne} </small> VS <small> {item.teams.teamTwo}</small></p>
                                    <p>Date: <small className="mr-2">{item.timing.date}</small> Time: <small>{item.timing.time}</small></p>
                                </Link>
                                    
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-4">
                        <h4 className="width-100 text-center mb-3">UpComimng Events</h4>

                        {EventDetils.upComingEvents.map((item, i) => {
                            return (
                                <div key={i} className="cardCust" data-aos="fade-up" >
                                    <Link to={"/eventDetail/" + item.id}  className="text-light">
                                    <h5>{item.eventName}</h5>
                                    <p>Descs: <small className=""> {item.evenShorDesc}</small></p>
                                    <p><small>{item.teams.teamOne} </small> VS <small> {item.teams.teamTwo}</small></p>
                                    <p>Date: <small className="mr-2">{item.timing.date}</small> Time: <small>{item.timing.time}</small></p>
                                    </Link>
                                    
                                    {/* <Link to="/test" className="btn btn-sm btn-outline-light">See Details</Link> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsDetails;