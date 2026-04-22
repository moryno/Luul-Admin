import { Flex, Tag } from "antd";
import styled from "styled-components";

export const StyledProductSummary = styled(Flex)`
  background: ${({ theme }) => theme.palette.gray[150]};
  padding: 16px;
  border-radius: 8px;
`;
export const StyledShippingStatus = styled(Tag)`
  background: #19503826;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  border-radius: 90px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.medium};
`;
