import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";

function SelfCheck(props) {
  const [Symptoms, setSymptoms] = useState({
    cough: false,
    fever: false,
    runnynose: false,
    headaches: false,
    chills: false,
  });

  const onChange = (e) => {
    setSymptoms({ ...Symptoms, [e.target.name]: e.target.checked });
  };

  return (
    <div className="App">
      <Jumbotron style={{ height: "100vh" }}>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h2 style={{ marginBottom: "30px" }}>User registration</h2>
            <Form>
              <label style={{ marginRight: "20px" }}>
                cough:
                <input
                  inline="true"
                  name="cough"
                  type="checkbox"
                  checked={Symptoms.cough}
                  onChange={onChange}
                />
              </label>
              <label style={{ marginRight: "20px" }}>
                fever:
                <input
                  inline="true"
                  name="fever"
                  type="checkbox"
                  checked={Symptoms.fever}
                  onChange={onChange}
                />
              </label>
              <label style={{ marginRight: "20px" }}>
                runnynose:
                <input
                  inline="true"
                  name="runnynose"
                  type="checkbox"
                  checked={Symptoms.runnynose}
                  onChange={onChange}
                />
              </label>
              <label style={{ marginRight: "20px" }}>
                headaches:
                <input
                  inline="true"
                  name="headaches"
                  type="checkbox"
                  checked={Symptoms.headaches}
                  onChange={onChange}
                />
              </label>
              <label style={{ marginRight: "20px" }}>
                chills:
                <input
                  inline="true"
                  name="chills"
                  type="checkbox"
                  checked={Symptoms.chills}
                  onChange={onChange}
                />
              </label>
            </Form>
            {(function () {
              if (
                Symptoms.cough !== false ||
                Symptoms.chills !== false ||
                Symptoms.runnynose !== false
              )
                return (
                  <div>
                    <div>
                      <Jumbotron style={{ backgroundColor: "White" }}>
                        <h4>List of Potential Disease</h4>

                        <li>cold</li>
                        <li>pneumonia</li>
                        <li>flu</li>
                      </Jumbotron>
                    </div>
                    <div>
                      <Jumbotron style={{ backgroundColor: "White" }}>
                        <h4>Advice from Doctor</h4>

                        <li>Keep the humidity high.</li>
                        <li>Drink more drinks than usual.</li>
                        <li>Grow more than usual.</li>
                        <li>Eat well.</li>
                        <li>Refrain from smoking.</li>
                        <li>Take proper nutritional supplements.</li>
                        <li>Avoid excessive exercise.</li>
                      </Jumbotron>
                    </div>
                  </div>
                );
            })()}
          </div>
          <div className="col-lg-4"></div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default withRouter(SelfCheck);
