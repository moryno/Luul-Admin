import { Flex, Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const StyledAppHeader = styled(Header)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 101;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => `${theme.header.height}px`};
  background: inherit;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  padding: 0px 16px;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.grey["Cool Grey"][200]};
  &:hover {
    background: ${({ theme }) => theme.palette.green["50"]};
    transition: all 0.3s ease;
  }
`;
export const AccountContainer = styled(Flex)`
  ${
    "" /* display: flex;
  align-items: center;
  gap: center;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.icon.background};
  &:hover {
    background: ${({ theme }) => theme.palette.green["50"]};
    transition: all 0.3s ease;
  } */
  }
`;
