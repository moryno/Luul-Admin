import { Tag } from "antd";
import styled from "styled-components";

export const StyledNewTag = styled(Tag)`
  background-color: red !important;
  color: ${({ theme }) => theme.palette.white} !important;
  text-transform: capitalize !important;
  font-weight: bold !important;
`;
