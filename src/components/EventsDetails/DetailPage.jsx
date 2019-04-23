import React, { Component } from "react";
import { EventDetils } from "../../Services/Events";
import Tabelgenrator from '../commom/TabelGenrator';

const DetailPage = props => {
  const id = props.match.params.id;
  let detailsToRender = null;
  if (id.includes("p")) {
    detailsToRender = EventDetils.previousEvents.filter(obj => obj.id === id);
  } else if (id.includes("o")) {
    detailsToRender = EventDetils.onGoingEvents.filter(obj => obj.id === id);
  } else if (id.includes("u")) {
    detailsToRender = EventDetils.upComingEvents.filter(obj => obj.id === id);
  }

  if(detailsToRender === "" || detailsToRender === null){
    props.history.replace("/not-found");
    return null
  }else
  return (
    <div className="backgroundLinear1 text-light p-4">
      {detailsToRender.map((item, i) => (
        <div key={i} className="container">
          <div className="row">
            <div className="h2">{item.eventName}</div>
            <p className="lead mt-2">{item.eventDetails.detailedDesc}</p>
            <h3 className="d-block width-100" style={{ display: "block" }}>
              Match between
              <span className="text-primary">
                {" "}
                {item.teams.teamOne}
              </span> VS{" "}
              <span className="text-warning">{item.teams.teamTwo}</span>
            </h3>
            <p className="d-block  w-100" />
            <h4 className="d-block  w-100">Timing Details</h4>
            <p>
              Date: <small className="mr-2">{item.timing.date}</small> Time:{" "}
              <small>{item.timing.time}</small>
            </p>
          </div>
          <h3 className="mb-2">Team Details</h3>

          <div className="row text-light pt-3">
            <div className="col-md-6">
            <h4>{item.teams.teamOne}</h4>
              {/* <table className="table text-light">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Player Name</th>
                    <th scope="col">Main Role</th>
                  </tr>
                </thead>
                <tbody>
                  {item.eventDetails.teamsDetails.team1.teamMembers.map(
                    (member, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>

                          <td>{member.memberName}</td>
                          <td>{member.mainRole}</td>
                        </tr>
                      );
                    }
                  )}
                 
                </tbody>
              </table> */}
              <Tabelgenrator tabelHead={["3", "Player Name", "Main Role"]} tabelRow={item.eventDetails.teamsDetails.team1.teamMembers} />
            </div>
            <div className="col-md-6">
                <h4>{item.teams.teamTwo}</h4>
              <table className="table text-light">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Player Name</th>
                    <th scope="col">Main Role</th>
                  </tr>
                </thead>
                <tbody>
                  {item.eventDetails.teamsDetails.team2.teamMembers.map(
                    (member, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>

                          <td>{member.memberName}</td>
                          <td>{member.mainRole}</td>
                        </tr>
                      );
                    }
                  )}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
