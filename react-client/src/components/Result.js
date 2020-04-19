import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

function Result(props) {
  const newData = props.location.state;

  return (
    <div>
      <Jumbotron>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-4"></div>
          <div className="col-4" style={{ textAlign: "center" }}>
            {(function () {
              if (newData.ResultofTest[0] * 100 > 50)
                return (
                  <div>
                    <Card style={{ width: "24rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/12/images-1577338761.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Result</Card.Title>

                        <Card.Text>
                          You would have Stroke, Please see doctor
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              else {
                return (
                  <div>
                    <Card style={{ width: "24rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/12/images-1577338761.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Result</Card.Title>

                        <Card.Text>
                          You would not have Stroke but please be careful
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })()}
          </div>
          <div className="col-4"></div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Result);
