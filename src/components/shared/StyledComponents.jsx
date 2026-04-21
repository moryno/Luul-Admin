import { Tag, Flex, Typography } from "antd";
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
