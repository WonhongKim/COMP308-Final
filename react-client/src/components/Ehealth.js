import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";

function Ehealth(props) {
  const [screen, setScreen] = useState("auth");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState();
  const apiUrl = "http://localhost:3000/api/signin";

  const auth = async () => {
    try {
      const loginData = { auth: { email, password } };
      const res = await axios.post(apiUrl, loginData);
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        setUserType(res.data.userType);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const readCookie = async () => {
    try {
      const res = await axios.get("/api/read_cookie");
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        setUserType(res.data.userType);
      }
    } catch (e) {
      setScreen("auth");
      console.log(e);
    }
  };

  const deleteCookie = async () => {
    try {
      await axios.get("api/signout");
      setScreen("auth");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  if (screen === "auth") {
    return (
      <div className="App" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Jumbotron>
              <h2 style={{ marginBottom: "30px" }}>Log in</h2>
              <Form>
                <Form.Group>
                  <Form.Label> Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="Email"
                    id="Email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Password</Form.Label>
                  <Form.Control
                    type="Password"
                    name="Password"
                    id="Password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <button className="btn btn-primary btn-md" onClick={auth}>
                Login
              </button>
            </Jumbotron>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  } else if (userType === "nurse") {
    return (
      <div className="jumbotron">
        <h2>Welcome {screen}</h2>
        <p className="lead">nurse</p>
        <hr className="my-4" />
        <div style={{ marginTop: "20px" }}>
          <a
            className="btn btn-primary btn-md"
            style={{ marginRight: "20px" }}
            href="/AddDailyTip"
          >
            Add Daily Tip
          </a>
          <a
            className="btn btn-warning btn-md"
            style={{ marginRight: "20px" }}
            href="/AddPatientData"
          >
            Add Pitent Data
          </a>
          <button className="btn btn-danger btn-md" onClick={deleteCookie}>
            Log out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="jumbotron">
        <h2>Welcome {screen}</h2>
        <p className="lead">patient</p>
        <hr className="my-4" />
        <div style={{ marginTop: "20px" }}>
          <a
            className="btn btn-primary btn-md"
            style={{ marginRight: "20px" }}
            href="/VeiwDailytip"
          >
            See Daily Tip
          </a>
          <a
            className="btn btn-warning btn-md"
            style={{ marginRight: "20px" }}
            href="/AddPatientData"
          >
            Add Pitent Data
          </a>
          <a
            className="btn btn-warning btn-md"
            style={{ marginRight: "20px" }}
            href="/Activity"
          >
            Move to Acitiviy page
          </a>
          <button className="btn btn-danger btn-md" onClick={deleteCookie}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Ehealth);
