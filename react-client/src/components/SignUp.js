import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp(props) {
  const [User, setUser] = useState({
    _id: "",
    type: "",
    uid: "",
    email: "",
    password: "",
    name: "",
    mobile: "",
    address: "",
  });

  const apiUrl = "http://localhost:3000/api/SignUp";

  const saveUser = (e) => {
    const data = {
      type: User.type,
      uid: User.uid,
      email: User.email,
      password: User.password,
      name: User.name,
      mobile: User.mobile,
      address: User.address,
    };
    console.log(User.type);
    try {
      if (
        User.uid === "" ||
        User.type === "" ||
        User.type === "select" ||
        User.email === "" ||
        User.password === "" ||
        User.name === "" ||
        User.mobile === "" ||
        User.address === ""
      ) {
        window.alert("Please Check values");
      } else {
        axios
          .post(apiUrl, data)
          .then((result) => {
            props.history.push("/Ehealth");
          })
          .catch((error) => {
            window.alert("there is exsiting User");
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e) => {
    e.persist();
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <Jumbotron>
            <h2 style={{ marginBottom: "30px" }}>User registration</h2>
            <Form>
              <Form.Group>
                <Form.Label>User Type</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  id="type"
                  value={User.type}
                  target={User.type}
                  onChange={onChange}
                >
                  <option value="select" defaultValue>
                    select user role
                  </option>{" "}
                  <option value="patient">patient</option>
                  <option value="nurse">nurse</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Uid</Form.Label>
                <Form.Control
                  type="text"
                  name="uid"
                  id="uid"
                  placeholder="Enter uid"
                  value={User.uid}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={User.email}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={User.password}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  value={User.name}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Phone Number"
                  value={User.mobile}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter address"
                  value={User.address}
                  onChange={onChange}
                />
              </Form.Group>
            </Form>
            <button className="btn btn-primary btn-md" onClick={saveUser}>
              Sign Up
            </button>
          </Jumbotron>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
