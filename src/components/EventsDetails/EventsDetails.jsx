import React, { Component } from "react";
import { EventDetils } from "../../Services/Events";
import { Link } from "react-router-dom";
// import Axios from "axios";
// import axios from "axios";
// import { Link } from 'react-router-dom';

const EventsDetails = () => {
  // var eventDetails;
  // fetch('http://localhost:3000')
  //     .then(res=> res.json())
  //     .then(data=>{eventDetails=data; console.log(eventDetails)});
  //   console.log(eventDetails)
  // const dumy = { TeamId: 1, IsActive: 1 };
  // fetch("http://192.168.10.8/api/values")
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  // fetch("http://192.168.10.8/api/values", {
  //   method: "post",
  //   body: JSON.stringify(JSON.stringify(dumy)),
  //   headers: {
  //     "Content-Type": "application/json",
  //     // "Content-Type": "application/x-www-form-urlencoded",
  // },
  // })
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  // axios.post("http://192.168.10.8/api/values", dumy)
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  return (
    <div className="EVD pt-4 pb-4 ">
      <h2 className="display-4 width-100 text-light text-center mb-5">
        Featured Events
      </h2>

      <div className="container">
        <div className="row text-light">
          <div className="col-md-4">
            <h4 className="width-100 text-center mb-3">Previous Events</h4>
            {EventDetils.previousEvents.map((item, i) => {
              return (
                <div key={i} className="cardCust" data-aos="fade-up">
                  <Link to={"/eventDetail/" + item.id} className="text-light">
                    <h5>{item.eventName}</h5>
                    <p>
                      Descs: <small className=""> {item.evenShorDesc}</small>
                    </p>
                    <p>
                      <small>{item.teams.teamOne} </small> VS{" "}
                      <small> {item.teams.teamTwo}</small>
                    </p>
                    <p>
                      Date: <small className="mr-2">{item.timing.date}</small>{" "}
                      Time: <small>{item.timing.time}</small>
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="col-md-4">
            <h4 className="width-100 text-center mb-3">OnGoing Events</h4>

            {EventDetils.onGoingEvents.map((item, i) => {
              return (
                <div key={i} className="cardCust" data-aos="fade-up">
                  <Link to={"/eventDetail/" + item.id} className="text-light">
                    <h5>{item.eventName}</h5>
                    <p>
                      Descs: <small className=""> {item.evenShorDesc}</small>
                    </p>
                    <p>
                      <small>{item.teams.teamOne} </small> VS{" "}
                      <small> {item.teams.teamTwo}</small>
                    </p>
                    <p>
                      Date: <small className="mr-2">{item.timing.date}</small>{" "}
                      Time: <small>{item.timing.time}</small>
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="col-md-4">
            <h4 className="width-100 text-center mb-3">UpComimng Events</h4>

            {EventDetils.upComingEvents.map((item, i) => {
              return (
                <div key={i} className="cardCust" data-aos="fade-up">
                  <Link to={"/eventDetail/" + item.id} className="text-light">
                    <h5>{item.eventName}</h5>
                    <p>
                      Descs: <small className=""> {item.evenShorDesc}</small>
                    </p>
                    <p>
                      <small>{item.teams.teamOne} </small> VS{" "}
                      <small> {item.teams.teamTwo}</small>
                    </p>
                    <p>
                      Date: <small className="mr-2">{item.timing.date}</small>{" "}
                      Time: <small>{item.timing.time}</small>
                    </p>
                  </Link>

                  {/* <Link to="/test" className="btn btn-sm btn-outline-light">See Details</Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
