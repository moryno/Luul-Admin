import { Suspense } from "react";
import PropTypes from "prop-types";

import { AppLoader } from ".";

const AppSuspense = ({ children }) => {
  return <Suspense fallback={<AppLoader />}>{children}</Suspense>;
};

AppSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppSuspense;
