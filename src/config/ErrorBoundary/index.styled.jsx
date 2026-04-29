import styled from "styled-components";

export const StyledAppBoundary = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  text-align: center;

  &svg {
    fill: ${({ theme }) => theme.palette.primary.main};
    width: 100%;
    max-width: 400px;
  }
`;
