import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";

function VeiwDailytip(props) {
  const [showLoading, setShowLoading] = useState(true);
  const [tiplist, setTiplist] = useState([]);
  const [tiplistsize, setTiplistSize] = useState();
  const apiUrl = "http://localhost:3000/api/tipLoad";

  const TiplistCheckter = async () => {
    try {
      const result = await axios(apiUrl);
      if (result.data !== undefined) {
        setTiplist(result.data);
      }
      if (result.data.length === 0) {
        setTiplistSize(0);
      }
      setShowLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    TiplistCheckter();
  }, []);

  const ViewDailytipDetail = (id) => {
    props.history.push({
      pathname: "/ViewDailytipDetail/" + id,
    });
    console.log(id);
  };

  return (
    <div className="App">
      {tiplistsize === 0 ? (
        <div>
          <p>Nohting Added Yet</p>
        </div>
      ) : (
        <div className="App">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <Jumbotron>
                <h2>Current Tip list</h2>
                {showLoading && (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                )}
                <ListGroup>
                  {tiplist.map((item, idx) => (
                    <ListGroup.Item
                      as="li"
                      key={idx}
                      action
                      onClick={() => {
                        ViewDailytipDetail(item._id);
                      }}
                    >
                      This is tip for Date : {item.date}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Jumbotron>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(VeiwDailytip);
