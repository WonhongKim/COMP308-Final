import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import "react-calendar/dist/Calendar.css";

function AddDailyTip(props) {
  const [DailyTip, setDailyTip] = useState({
    _id: "",
    tip: "",
    writer: "",
  });

  const moment = require("moment");
  const [state, setState] = useState({
    date: moment(new Date()).format("YYYY-MM-DD"),
  });
  const apiUrl = "http://localhost:3000/api/AddDailyTip";

  const saveDailyTip = (e) => {
    const data = {
      date: state.date,
      tip: DailyTip.tip,
      writer: DailyTip.writer,
    };
    try {
      if (
        DailyTip.date === "" ||
        DailyTip.tip === "" ||
        DailyTip.writer === ""
      ) {
        window.alert("Please Check values");
      } else {
        axios
          .post(apiUrl, data)
          .then((result) => {
            props.history.push("/Ehealth");
          })
          .catch((error) => {
            window.alert("there is exsiting Daily Tip");
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onDateChange = (date) => {
    setState({ ...state, date: moment(date).format("YYYY-MM-DD") });
  };

  const onChange = (e) => {
    setDailyTip({ ...DailyTip, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Jumbotron>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Form>
              <Form.Group>
                <Form.Label> Writer</Form.Label>
                <Form.Control
                  type="text"
                  name="writer"
                  id="writer"
                  placeholder="Enter writer"
                  value={DailyTip.writer}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Daily Tip</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="12"
                  type="text"
                  name="tip"
                  id="tip"
                  placeholder="Enter DailyTip"
                  value={DailyTip.tip}
                  onChange={onChange}
                />
              </Form.Group>
            </Form>
            <h4>Choose Date</h4>
            <Calendar onChange={onDateChange} />

            <button className="btn btn-primary btn-md" onClick={saveDailyTip}>
              Add daily Tip
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default withRouter(AddDailyTip);
