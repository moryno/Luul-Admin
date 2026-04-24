import styled from "styled-components";
import { GridLoader } from "react-spinners";
import PropTypes from "prop-types";

import { defaultTheme } from "@/lib";

const StyledAppLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ height }) => height};
  position: ${({ position }) => position};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    height: ${({ height }) => height};
  }
`;

const AppLoader = ({ position = "absolute", height = "100%" }) => {
  return (
    <StyledAppLoader position={position} height={height}>
      <GridLoader color={defaultTheme.theme.palette.primary.main} size={20} />
    </StyledAppLoader>
  );
};

AppLoader.propTypes = {
  lottie: PropTypes.bool,
  position: PropTypes.string,
  height: PropTypes.string,
};

export default AppLoader;
