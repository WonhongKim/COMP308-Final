import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ViewDailytipDetail(props) {
  const [tips, setNewtips] = useState({
    _id: "",
    date: "",
    writer: "",
    tip: "",
  });
  const apiUrl =
    "http://localhost:3000/api/DailyTipDetail/" + props.match.params.id;

  useEffect(() => {
    LoadTip();
  }, []);

  const LoadTip = async () => {
    const result = await axios(apiUrl);
    setNewtips(result.data);
    console.log(result.data);
  };

  return (
    <div className="app">
      <Jumbotron>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h2 style={{ marginBottom: "30px" }}>
              This is Tip for: {tips.date}
            </h2>
            <Card style={{ width: "24rem" }}>
              <Card.Img
                variant="top"
                src="https://elem.hcdsb.org/stbrigid/wp-content/uploads/sites/52/2020/02/Tip-image.jpg"
              />
              <Card.Body>
                <Card.Title>Today's Tip!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  by {tips.writer}
                </Card.Subtitle>
                <Card.Text>{tips.tip}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default withRouter(ViewDailytipDetail);
