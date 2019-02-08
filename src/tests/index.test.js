import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

test("dummy test", () => {
  const wrapper = shallow(<Button onClick={() => {}} />);
  expect(wrapper.find("button").text()).toBe("<FormattedMessage />");
});
