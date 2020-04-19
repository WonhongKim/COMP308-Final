import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

function Stroke(props) {
  const [Status, setStatus] = useState("No");
  const [testData, settestData] = useState({
    weight: 0,
    age: 0,
    blood_fat: 0,
    body_fat: 0,
    storke: 1,
  });
  const [testResult, settestResult] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/api/training";

  const Training = async () => {
    setShowLoading(true);
    const data = {
      weight: parseFloat(testData.weight),
      age: parseFloat(testData.age),
      blood_fat: parseFloat(testData.blood_fat),
      body_fat: parseFloat(testData.body_fat),
    };
    try {
      if (
        data.weight === 0 ||
        data.age === 0 ||
        data.blood_fat === 0 ||
        data.body_fat === 0
      ) {
        window.alert("Please Check values");
      } else {
        const result = await axios.post(apiUrl, data);

        if (result.data.Status !== undefined) {
          setStatus(result.data.Status);
          settestResult(result.data.resultForTest1);
        }
      }
    } catch (e) {
      console.log(e);
    }
    setShowLoading(false);
  };

  const onChange = (e) => {
    e.persist();
    settestData({ ...testData, [e.target.name]: e.target.value });
  };

  if (Status === "No") {
    return (
      <div>
        <Jumbotron>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-4"></div>
            <div className="col-4" style={{ textAlign: "center" }}>
              {showLoading && (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div
              className="col-4"
              style={{
                textAlign: "center",
                marginTop: "20px",
                border: "2px solid",
              }}
            >
              <Form>
                <Form.Group>
                  <Form.Label> weight</Form.Label>
                  <Form.Control
                    type="text"
                    name="weight"
                    id="weight"
                    placeholder="weight sepal_length"
                    value={testData.weight}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>age</Form.Label>
                  <Form.Control
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Enter age"
                    value={testData.age}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>blood_fat</Form.Label>
                  <Form.Control
                    type="text"
                    name="blood_fat"
                    id="blood_fat"
                    placeholder="Enter blood_fat"
                    value={testData.blood_fat}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>body_fat</Form.Label>
                  <Form.Control
                    type="text"
                    name="body_fat"
                    id="body_fat"
                    placeholder="Enter body_fat"
                    value={testData.body_fat}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form>
              <button className="btn btn-primary btn-md" onClick={Training}>
                Test
              </button>
            </div>
            <div className="col-4"></div>
          </div>
        </Jumbotron>
      </div>
    );
  } else {
    return (
      <div>
        <Jumbotron>
          <div
            className="row"
            style={{ marginTop: "40px", textAlign: "center" }}
          >
            <div className="col-4"></div>
            <div className="col-4">
              <h1 className="display-4">Test is Done</h1>
              <p className="lead">Click the button to see the result</p>
              <Link
                to={{
                  pathname: "/Result",
                  state: {
                    ResultofTest: testResult,
                  },
                }}
              >
                Show Result
              </Link>
            </div>
            <div className="col-4"></div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default withRouter(Stroke);
