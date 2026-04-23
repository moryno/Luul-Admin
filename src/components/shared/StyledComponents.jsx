import { Tag, Flex, Typography, Divider, Card } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const StyledNewTag = styled(Tag)`
  background-color: red !important;
  color: ${({ theme }) => theme.palette.white} !important;
  text-transform: capitalize !important;
  font-weight: bold !important;
`;

export const StyledPageWrapper = styled(Flex)`
  padding: 16px;
`;
export const StyledPageTitle = styled(Title)``;
export const StyledDivider = styled(Divider)`
  margin: 0px !important;
  padding: 0px !important;
  font-size: ${({ theme }) => theme.font.size.medium} !important;
  color: ${({ theme }) => theme.palette.text.secondary} !important;
  font-weight: 400 !important;
`;
export const StyledCard = styled(Card)``;
export const StyledPrimaryTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.primary.main} !important;
`;
