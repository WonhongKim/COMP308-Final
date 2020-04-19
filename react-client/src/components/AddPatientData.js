import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import "react-calendar/dist/Calendar.css";

function AddPatientData(props) {
  const [PatientData, setPatientData] = useState({
    _id: "",
    uid: "",
    patientname: "",
    bodytemperature: "",
    heartrate: "",
    bloodpressure: "",
    sender: "",
    sendertype: "",
  });

  const moment = require("moment");
  const [state, setState] = useState({
    date: moment(new Date()).format("YYYY-MM-DD"),
  });
  const apiUrl = "http://localhost:3000/api/AddPatientData";

  const saveDailyTip = (e) => {
    const data = {
      uid: PatientData.uid,
      patientname: PatientData.patientname,
      bodytemperature: PatientData.bodytemperature,
      heartrate: PatientData.heartrate,
      bloodpressure: PatientData.bloodpressure,
      sender: PatientData.sender,
      sendertype: PatientData.sendertype,
      date: state.date,
    };
    try {
      if (
        PatientData.uid === "" ||
        PatientData.patientname === "" ||
        PatientData.bodytemperature === "" ||
        PatientData.heartrate === "" ||
        PatientData.bloodpressure === "" ||
        PatientData.sender === "" ||
        PatientData.sendertype === ""
      ) {
        window.alert("Please Check values");
      } else {
        axios
          .post(apiUrl, data)
          .then((result) => {
            props.history.push("/Ehealth");
            window.alert("Added Successfully ");
          })
          .catch((error) => {
            window.alert("Please check it again");
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
    setPatientData({ ...PatientData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Jumbotron>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Form>
              <Form.Group>
                <Form.Label> Uid</Form.Label>
                <Form.Control
                  type="text"
                  name="uid"
                  id="uid"
                  placeholder="Enter Uid"
                  value={PatientData.uid}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> patientname</Form.Label>
                <Form.Control
                  type="text"
                  name="patientname"
                  id="patientname"
                  placeholder="Enter patientname"
                  value={PatientData.patientname}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> bodytemperature</Form.Label>
                <Form.Control
                  type="text"
                  name="bodytemperature"
                  id="bodytemperature"
                  placeholder="Enter bodytemperature"
                  value={PatientData.bodytemperature}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> heartrate</Form.Label>
                <Form.Control
                  type="text"
                  name="heartrate"
                  id="heartrate"
                  placeholder="Enter heartrate"
                  value={PatientData.heartrate}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> bloodpressure</Form.Label>
                <Form.Control
                  type="text"
                  name="bloodpressure"
                  id="bloodpressure"
                  placeholder="Enter bloodpressure"
                  value={PatientData.bloodpressure}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> sender</Form.Label>
                <Form.Control
                  type="text"
                  name="sender"
                  id="sender"
                  placeholder="Enter sender"
                  value={PatientData.sender}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> sendertype</Form.Label>
                <Form.Control
                  type="text"
                  name="sendertype"
                  id="sendertype"
                  placeholder="Enter sendertype"
                  value={PatientData.sendertype}
                  onChange={onChange}
                />
              </Form.Group>
            </Form>
            <h4>Choose Date</h4>
            <Calendar onChange={onDateChange} />

            <button className="btn btn-primary btn-md" onClick={saveDailyTip}>
              Sign Up
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default withRouter(AddPatientData);
