import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import "./bootstrap.min.css";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Ehealth from "./components/Ehealth";
import AddDailyTip from "./components/AddDailyTip";
import VeiwDailytip from "./components/VeiwDailytip";
import ViewDailytipDetail from "./components/ViewDailytipDetail";
import AddPatientData from "./components/AddPatientData";
import Activity from "./components/Activity";

function App(props) {
  return (
    <Router>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Navbar.Toggle aria-controls="navbarColor01" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
            <Nav.Link href="/Ehealth">Ehealth</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Route render={() => <Home />} path="/home" />
        <Route render={() => <SignUp />} path="/SignUp" />
        <Route render={() => <Ehealth />} path="/Ehealth" />
        <Route render={() => <AddDailyTip />} path="/AddDailyTip" />
        <Route render={() => <VeiwDailytip />} path="/VeiwDailytip" />
        <Route
          render={() => <ViewDailytipDetail />}
          path="/ViewDailytipDetail/:id"
        />
        <Route render={() => <AddPatientData />} path="/AddPatientData" />
        <Route render={() => <Activity />} path="/Activity" />
      </div>
    </Router>
  );
}
export default App;
