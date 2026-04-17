import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const StyledAppLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
`;

export const StyledAppLayoutMain = styled(Layout)`
  transition: all 0.1s linear;
  flex-shrink: 0;
  position: absolute;
  width: 100% !important;
  height: 100% !important;
  background: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const StyledAppLayoutContent = styled(Content)`
  position: relative;
  width: 100% !important;
`;
