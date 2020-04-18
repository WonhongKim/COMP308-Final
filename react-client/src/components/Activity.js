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
                <Card.Title>Today's Activity!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Let's Together Today's work out
                </Card.Subtitle>
                <Card.Text style={{ textAlign: "center" }}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ml6cT4AZdqI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
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
