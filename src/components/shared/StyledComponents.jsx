import { Tag, Flex, Typography, Divider, Card } from "antd";
import styled from "styled-components";
import { ContainerButton } from "../ui";

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
export const StyledCard = styled(Card)`
  .ant-card-head {
    border: none !important;
  }
`;
export const StyledPrimaryTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.primary.main} !important;
`;
export const StyledSecondaryButton = styled(ContainerButton)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  background: transparent;
  color: ${({ theme }) => theme.palette.primary.main};
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main} !important;
    color: ${({ theme }) => theme.palette.white} !important;
  }
`;
export const StyledDashedButton = styled(ContainerButton)`
  border: 1px dashed ${({ theme }) => theme.palette.primary.main};
  background: transparent;
  color: ${({ theme }) => theme.palette.primary.main};
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.palette.white} !important;
    color: ${({ theme }) => theme.palette.primary.main} !important;
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
