import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

const Dummy = () => (
  <div>
    <FormattedMessage {...messages.dummyName} />
  </div>
);

export default Dummy;
