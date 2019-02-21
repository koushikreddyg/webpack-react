import React from "react";
import PropTypes from "prop-types";

const B = ({ history }) => (
  <div>
    Component B
    <button onClick={() => history.push("/")}> Navigate to home</button>
  </div>
);

B.propTypes = {
  history: PropTypes.object.isRequired
};

export default B;
