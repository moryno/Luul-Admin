import { Component } from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";

import ErrorIcon from "./ErrorIcon";
import { StyledAppBoundary } from "./index.styled";
import { ContainerButton } from "@/components";
import { hardRefreshAndEmptyCache } from "@/helpers";

const { Title, Text } = Typography;

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("error: ", error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("errorInfo: ", errorInfo);
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledAppBoundary>
          <ErrorIcon />
          <Title level={4}>Ah! Something went wrong.</Title>
          <Text type="secondary">
            Brace yourself till we get the error fixed.
          </Text>
          <Text type="secondary">
            You may also refresh the page or try again later
          </Text>
          <br />
          <ContainerButton
            title="Refresh"
            type="primary"
            onClick={hardRefreshAndEmptyCache}
            size="large"
          />
        </StyledAppBoundary>
      );
    } else {
      return this.props.children;
    }
  }
}

AppErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppErrorBoundary;
