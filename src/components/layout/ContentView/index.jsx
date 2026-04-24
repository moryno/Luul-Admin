import PropTypes from "prop-types";

import { StyledMainContentView } from "./index.styled";
import { AppSuspense } from "@/components/shared";
import { AppErrorBoundary } from "@/config";

const ContentView = ({ routes }) => {
  return (
    <StyledMainContentView>
      <AppSuspense>
        <AppErrorBoundary>{routes}</AppErrorBoundary>
      </AppSuspense>
    </StyledMainContentView>
  );
};
ContentView.prototype = {
  routes: PropTypes.array.isRequired,
};
export default ContentView;
