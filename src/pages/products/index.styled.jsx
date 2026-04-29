import { Card, Col, Flex, Tag, Typography } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

export const StyledStatTitle = styled(Text)`
  color: ${({ primaryBg, theme }) =>
    `${primaryBg ? theme.palette.primary.main : theme.palette.text.secondary}`} !important;
  font-weight: 500 !important;
  font-size: ${({ theme }) => theme.font.size.large} !important;
`;
export const StyledStatText = styled(Text)`
  color: ${({ type, theme }) =>
    `${type === "Low" ? theme.palette.borderColor.error : type === "High" ? theme.palette.primary.main : theme.palette.text.secondary}`};
  font-weight: 500 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
`;
export const StyledPageTitle = styled(Title)``;
export const StyledCategoryTitle = styled(Text)`
  font-weight: 500 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
  color: ${({ primary, theme }) =>
    `${primary ? "#0D2524" : theme.palette.gray[500]}`} !important;
`;
export const StyledSkuText = styled(Text)`
  font-weight: 400 !important;
  font-size: ${({ theme }) => theme.font.size.small} !important;
`;
export const StyledCardSectionWrapper = styled(Col)`
  &.withBorder {
    border-left: ${({ theme }) =>
      `1px solid ${theme.palette.grey["Cool Grey"][200]}`} !important;
  }
`;
export const StyledStatCard = styled(Card)`
  height: 300px;
`;
export const StyledFormTitle = styled(Title)`
  font-weight: 600 !important;
`;
export const StyledInfoText = styled(Text)`
  font-weight: 400 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
  color: #1a71f6;
`;
export const StyledSubText = styled(Text)`
  font-weight: 400 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
`;
export const StyledProductColumn = styled(Flex)``;
export const StyledProductColTitleWrapper = styled(Flex)`
  span:first-child {
    color: #1a71f6;
    font-size: ${({ theme }) => theme.font.size.small} !important;
  }
`;
export const StyledProductColTitle = styled(Text)`
  font-weight: 400 !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
`;
export const StyledAvailabilityStatus = styled(Tag)`
  padding: 8px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.medium};
  border-radius: 10px;
`;
