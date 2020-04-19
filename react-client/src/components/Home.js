import { withRouter } from "react-router-dom";

import React from "react";

function Home(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Hello</h1>
      <p className="lead">This is Ehealth system</p>
      <hr className="my-4" />
      <p>
        First of all you need to sign up for processing your course resister.
      </p>
    </div>
  );
}

export default withRouter(Home);
