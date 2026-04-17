import React from "react";
import { StyledMainContentView } from "./index.styled";
import PropTypes from "prop-types";

const ContentView = ({ routes }) => {
  return <StyledMainContentView>{routes}</StyledMainContentView>;
};
ContentView.prototype = {
  routes: PropTypes.array.isRequired,
};
export default ContentView;
