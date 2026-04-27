import { ContainerButton } from "@/components";
import { Flex, Form, Typography } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

export const StyledLoginContainer = styled(Flex)`
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.primary.main} 50%,
    ${({ theme }) => theme.palette.green[100]} 50%
  );
`;
export const StyledLoginForm = styled(Form)`
  width: 480px;
  border-radius: 16px;
  overflow: hidden;
  padding: 40px 36px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.green[100]} 50%,
    ${({ theme }) => theme.palette.primary.main} 50%
  );

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 90%;
    padding: 32px 24px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.palette.green[100]} 50%,
      ${({ theme }) => theme.palette.primary.main} 50%
    );
  }
`;
export const StyledLoginFormHeader = styled(Flex)`
  margin-bottom: 28px;
`;
export const StyledLoginFormTitle = styled(Title)`
  &.ant-typography {
    color: ${({ theme }) => theme.palette.white} !important;
    font-family: ${({ theme }) => theme.font.heading}, sans-serif !important;
    margin: 0 !important;
  }
`;
export const StyledLoginFormSubtitle = styled(Text)`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${({ theme }) => theme.font.size.medium};
  margin: 0;
`;
export const StyledLoginFormError = styled.div`
  background: ${({ theme }) => theme.palette.error[100]};
  color: ${({ theme }) => theme.palette.error[600]};
  border: ${({ theme }) => theme.palette.error[500]};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.font.size.medium};
  margin-bottom: 16px;
`;
export const StyledLoginFormItem = styled(Form.Item)`
  .ant-form-item-label > label {
    color: ${({ theme }) => theme.palette.white} !important;
    font-weight: 500;
  }

  .ant-input,
  .ant-input-affix-wrapper {
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    color: ${({ theme }) => theme.palette.white} !important;
    border-radius: 8px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }

    &:focus,
    &.ant-input-affix-wrapper-focused {
      border-color: ${({ theme }) => theme.palette.white} !important;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2) !important;
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.5) !important;
    }
  }

  /* Password eye icon */
  .ant-input-password-icon {
    color: rgba(255, 255, 255, 0.6) !important;
    &:hover {
      color: ${({ theme }) => theme.palette.white} !important;
    }
  }
`;
export const StyledLoginButton = styled(ContainerButton)`
  height: 44px;
  border: 2px solid ${({ theme }) => theme.palette.white};
  background: transparent;
  color: ${({ theme }) => theme.palette.white};
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover {
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
