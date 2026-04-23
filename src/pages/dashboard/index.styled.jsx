import { Card, Flex, Typography } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

export const StyledOverviewStatCard = styled(Card)`
  .ant-card-body {
    padding: 0 !important;
    overflow: hidden;
  }
  height: 130px;
`;
export const StyledStatCardWrapper = styled(Flex)`
  padding: 16px !important;
  height: 130px !important;
  width: 100% !important;
  background: ${({ background, theme }) =>
    `${background ? theme.palette.primary.main : null}`};
`;
export const StyledStatCardTitle = styled(Text)`
  font-weight: 600 !important;
  font-size: ${({ theme }) => theme.font.size.large} !important;
  color: ${({ background, theme }) =>
    `${background ? theme.palette.white : null}`} !important;
`;
export const StyledStatCount = styled(Title)`
  color: ${({ background, theme }) =>
    `${background ? theme.palette.white : theme.palette.primary.main}`} !important;
`;
export const StyledOverviewStatText = styled(Text)`
  color: ${({ background, theme }) =>
    `${background ? theme.palette.grey["Cool Grey"][200] : null}`} !important;
  font-weight: 400 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
`;
export const StyledOverviewSecondaryTitle = styled(Text)`
  font-weight: 600 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
`;
