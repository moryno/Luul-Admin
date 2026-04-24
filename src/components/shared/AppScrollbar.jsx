import PropTypes from "prop-types";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import styled from "styled-components";

const StyledScrollbar = styled(SimpleBarReact)`
  position: relative;
  width: 100%;
  height: 100%;

  &.simplebar-offset,
  &.simplebar-content-wrapper,
  &.simplebar-content {
    height: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .simplebar-track.simplebar-vertical {
    width: 8px;
  }
  .simplebar-track.simplebar-horizontal {
    height: 8px;
  }
`;

const AppScrollbar = ({
  children,
  className,
  simpleBarRef,
  scrollableNodeProps,
  ...rest
}) => {
  return (
    <StyledScrollbar
      ref={simpleBarRef}
      className={className}
      scrollableNodeProps={{ className: "", ...scrollableNodeProps }}
      {...rest}
    >
      {children}
    </StyledScrollbar>
  );
};

AppScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  scrollableNodeProps: PropTypes.shape({
    ref: PropTypes.object,
    className: PropTypes.string,
  }),
  simpleBarRef: PropTypes.object,
};

export default AppScrollbar;
