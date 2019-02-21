import React from "react";

import PropTypes from "prop-types";

class A extends React.Component {
  componentDidMount() {
    document.title = "Koushik-A";
  }

  componentWillUnmount() {
    document.title = "Document";
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <button onClick={() => history.push("/b")}> Navigate to B</button>
      </div>
    );
  }
}

A.propTypes = {
  history: PropTypes.object.isRequired
};

export default A;
