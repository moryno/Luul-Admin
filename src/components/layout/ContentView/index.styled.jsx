import { styled } from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const StyledMainContentView = styled(Content)`
  min-height: 100%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 100% !important;
  }
`;
