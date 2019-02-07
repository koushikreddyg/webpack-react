import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

const Button = ({ onClick }) => (
  <button onClick={onClick}>
    <FormattedMessage {...messages.buttonName} />
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
