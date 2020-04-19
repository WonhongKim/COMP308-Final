import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Activity(props) {
  return (
    <div className="app">
      <Jumbotron>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center", marginTop: "20px" }}>
                  Today's Activity!
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  Let's Together Today's work out
                </Card.Subtitle>
                <Card.Text style={{ textAlign: "center", marginTop: "30px" }}>
                  <iframe
                    title="Acitivity"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ml6cT4AZdqI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Activity);
