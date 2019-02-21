import React from "react";

import PropTypes from "prop-types";

const A = ({ history }) => (
  <div>
    Component A
    <button onClick={() => history.push("/b")}> Navigate to B</button>
  </div>
);

A.propTypes = {
  history: PropTypes.object.isRequired
};

export default A;
