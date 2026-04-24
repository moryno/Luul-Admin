import { AppScrollbar } from "@/components/shared";
import { Avatar, Flex, Layout, Menu, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

const { Text } = Typography;

export const StyledAppLayout = styled(Layout)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: transparent;
  display: flex;
  flex-direction: row;
`;

export const StyledAppLayoutMain = styled(Layout)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  background: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  overflow: hidden;
`;
export const StyledAppLayoutContent = styled(Content)`
  flex: 1;
  overflow-x: hidden;
`;

export const StyledAppLayoutContentScrollbar = styled(AppScrollbar)`
  overflow-x: hidden;
  height: ${({ theme }) => `calc(100svh - ${theme.header.height}px)`};

  .simplebar-scrollbar::before {
    background: ${({ theme }) => theme.palette.primary.main};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 0px calc(50% - 624px) 32px calc(50% - 624px);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 0px 16px 16px 16px;
    height: ${({ theme }) => `calc(100svh - ${theme.header.height}px)`};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xxs}px) {
    padding: 0px 10px 10px 10px;
  }
`;

export const StyledAccountContainer = styled(Menu)`
  padding: 0px !important;
  background: inherit;
`;
export const StyledNotificationContainer = styled(Menu)`
  padding: 0px !important;
`;

export const StyledMenuItem = styled(Flex)`
  background: inherit;
`;
export const StyledNotificationMenuItem = styled(Flex)`
  background: inherit;
`;
export const StyledDropdownContainer = styled.div`
  min-width: 280px;
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid ${({ theme }) => theme.palette.borderColor.default};
  overflow: hidden;
`;

/* ===== Notification styles ===== */
export const StyledDropdownHeader = styled(Flex)`
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor.default};
`;

export const StyledNotificationItem = styled(Flex)`
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor.default};
  }

  &:hover {
    background: ${({ theme }) => theme.palette.gray[50]};
  }
`;

export const StyledNotificationIconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.sideBar.sidebarMenuSelectedBgColor};
`;

export const StyledNotificationMeta = styled(Flex)`
  flex: 1;
  min-width: 0;
`;

export const StyledNotificationLabel = styled(Text)`
  font-size: ${({ theme }) => theme.font.size.medium} !important;
  font-weight: 500;
  line-height: 1.4;
  white-space: normal; /* ✅ Allows text to wrap */
`;

export const StyledNotificationText = styled(Text)`
  font-size: ${({ theme }) => theme.font.size.small} !important;
  color: ${({ theme }) => theme.palette.text.secondary} !important;
`;

/* ===== Account styles ===== */
export const StyledAccountHeader = styled(Flex)`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor.default};
  background: ${({ theme }) => theme.sideBar.sidebarMenuSelectedBgColor};
`;

export const StyledAccountMenuItem = styled(Flex)`
  padding: 14px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: ${({ $danger, theme }) =>
    $danger ? theme.palette.error[600] : theme.palette.text.primary};

  &:hover {
    background: ${({ $danger, theme }) =>
      $danger ? "#FFF1F0" : theme.palette.gray[50]};
  }
`;

export const StyledMenuItemAvatar = styled(Avatar)`
  background: ${({ theme }) => theme.palette.primary.main} !important;
  flex-shrink: 0;
`;

export const StyledProfileLabel = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.palette.primary.main} !important;
`;
export const StyledMenuItemLabel = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.medium};
`;
