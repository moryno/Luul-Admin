import { Tag, Flex, Typography, Divider, Card, Button, Avatar } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;
export const StyledPageTitle = styled(Title)``;

export const StyledProfileButton = styled(Button)`
  background: transparent !important;
  color: #2a69bb !important;
  border: 1px solid #2a69bb;
  border-radius: 4px;
  font-weight: 500;
  svg {
    vertical-align: middle;
  }

  &.ant-btn-primary {
    box-shadow: none !important;
  }
  &.ant-btn-primary:disabled,
  &.ant-btn-default:disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
  }
`;
export const StyledProfileAvatar = styled(Avatar)`
  background: ${({ theme }) => theme.palette.grey["Cool Grey"][50]} !important;
`;
export const StyledProfileName = styled(Text)`
  font-weight: 600 !important;
  font-size: 24px !important;
  ${
    "" /* color: ${({ background, theme }) =>
    `${background ? theme.palette.white : null}`} !important; */
  }
`;
export const StyledProfileRole = styled(Text)`
  font-weight: 500 !important;
  font-size: ${({ theme }) => theme.font.size.large} !important;
  color: ${({ theme }) => theme.palette.text.secondary} !important;
`;
export const StyledPasswordTitle = styled(Text)`
  font-weight: 600 !important;
  font-size: ${({ theme }) => theme.font.size.large} !important;
  color: #001c55 !important;
`;
export const StyledPasswordText = styled(Text)`
  font-weight: 500 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
  color: ${({ theme }) => theme.palette.text.secondary} !important;
`;
