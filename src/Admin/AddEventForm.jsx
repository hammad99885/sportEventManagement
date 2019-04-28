import React, { Component } from "react";
import InputField from "../components/commom/InputFields";

class AddEventFrom extends Component {
  state = {};

  oniChange = e => {
    console.log(e.target.value);
  };
  render() {
    return (
      <div className="bg-dark">
        <div className="container pt-4 pb-4 ">
          <div className="card card-outline-secondary text-light backgroundLinear1">
            <div className="card-header bg-secondary text-dark">
              <h3 className="mb-0">Add Event</h3>
            </div>
            <div className="card-body">
              <div className="row mt-4">
                <div className="col-sm-6 pb-3">
                  <InputField
                    name="eventName"
                    type="text"
                    label="Event Name"
                    changeHandler=""
                  />
                </div>
                <div className="col-sm-6 pb-3">
                  <InputField
                    name="eventType"
                    type="text"
                    label="Event Type"
                    changeHandler=""
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-3 pb-3">
                  <div className="form-group">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="eventStartDate"
                    >
                      Event Start Date
                    </label>
                    <input
                      type="date"
                      className="text-light form-control white pa2  bg-transparent"
                      name="eventStartDate"
                      id="eventStartDate"
                    />
                  </div>
                </div>
                <div className="col-sm-3 pb-3">
                  <div className="form-group">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="eventStartTime"
                    >
                      Event Start Time
                    </label>
                    <input
                      // onChange={changeHandler}
                      type="time"
                      className="text-light form-control white pa2  bg-transparent"
                      name="eventStartTime"
                      id="eventStartTime"
                    />
                  </div>
                </div>
                <div className="col-sm-3 pb-3">
                  <div className="form-group">
                    <label className="db fw6 lh-copy f6" htmlFor="eventEndDate">
                      Event End Date
                    </label>
                    <input
                      type="date"
                      className="text-light form-control white pa2  bg-transparent"
                      name="eventEndDate"
                      id="eventEndDate"
                    />
                  </div>
                </div>
                <div className="col-sm-3 pb-3">
                  <div className="form-group">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="eventStartTime"
                    >
                      Event Start Time
                    </label>
                    <input
                      // onChange={changeHandler}
                      type="time"
                      className="text-light form-control white pa2  bg-transparent"
                      name="eventStartTime"
                      id="eventStartTime"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 pb-3">
                  <div className="form-group">
                    <textarea
                      // onChange={changeHandler}
                      className="text-light form-control white pa2  bg-transparent"
                      name="eventDetail"
                      id="eventDetail"
                      rows="5"
                    />
                    <label htmlFor="eventDetail" className="animated-label">
                      Event Detail
                    </label>
                  </div>
                  <small className="text-muted">Add event Detail here.</small>
                </div>
                <div className="col-md-6 pb-3">
                  <div className="form-group">
                    <textarea
                      // onChange={changeHandler}
                      className="text-light form-control white pa2  bg-transparent"
                      name="eventSummary"
                      id="eventSummary"
                      rows="5"
                    />
                    <label htmlFor="eventSummary" className="animated-label">
                      Event Summary
                    </label>
                  </div>
                  <small className="text-muted">Add event Summary here.</small>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-10" />
                <div className="col-sm-2">
                  <button className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light">
                    Add Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEventFrom;
