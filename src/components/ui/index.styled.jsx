import { Form, Input, Tabs } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
  input::placeholder,
  .ant-input::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.placeholder};
  }
`;
export const StyledFormItem = styled(Form.Item)`
  width: ${({ width }) => width};
`;
export const StyledAppTabs = styled(Tabs)`
  padding: 0px;
  font-size: 16px;
  font-weight: 500;
  .ant-tabs-nav::before {
    border: none;
  }
  .ant-tabs-ink-bar {
    background-color: transparent;
  }
  .ant-tabs-tab {
    padding: 0px 8px;
    border-radius: 12px;
    margin-left: 0px !important;
    margin-bottom: 2px !important;
    height: 36px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.09) !important;

    transition: all 0.2s ease;

    .ant-tabs-tab-btn {
      color: ${({ theme }) => theme.palette.text.secondary};
    }

    &:hover {
      background: ${({ theme }) => theme.palette.primary.main};
      .ant-tabs-tab-btn {
        color: ${({ theme }) => theme.palette.white} !important;
        svg {
          path:not([fill="none"]) {
            stroke: ${({ theme }) => theme.palette.white} !important;
          }
        }
      }
    }
  }
  .ant-tabs-tab-active {
    background: ${({ theme }) => theme.palette.primary.main};
    .ant-tabs-tab-btn {
      color: ${({ theme }) => theme.palette.white} !important;
      svg {
        path:not([fill="none"]) {
          stroke: ${({ theme }) => theme.palette.white} !important;
        }
      }
    }
  }
  .ant-tabs-nav-operations {
    display: none !important;
  }
  .ant-tabs-nav-list {
    gap: 16px;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
      gap: 8px;
    }
  }
`;
export const StyledTabWithText = styled(Tabs)`
  padding: 0;
  border: ${({ theme }) => `1px solid ${theme.palette.grey["Cool Grey"][200]}`};
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: 14px;

  .ant-tabs-nav {
    margin: 0;
    padding: 4px;

    &::before {
      border: none;
    }
  }

  .ant-tabs-nav-wrap {
    display: flex;
    align-items: center;
  }

  .ant-tabs-nav-list {
    display: flex;
    gap: 16px;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
      gap: 8px;
    }
  }

  .ant-tabs-tab {
    padding: 0 8px;
    border-radius: 12px;
    margin: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 200px;
    transition: all 0.2s ease;

    .ant-tabs-tab-btn {
      color: ${({ theme }) => theme.palette.text.secondary};
    }

    &:hover {
      background: ${({ theme }) => theme.sideBar.sidebarMenuHoverBgColor};
      .ant-tabs-tab-btn {
        color: ${({ theme }) => theme.sideBar.sidebarMenuHoverTextColor};
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      width: 300px;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    background: ${({ theme }) => theme.sideBar.sidebarMenuSelectedBgColor};

    .ant-tabs-tab-btn {
      color: ${({ theme }) =>
        theme.sideBar.sidebarMenuSelectedTextColor} !important;
    }
  }

  .ant-tabs-ink-bar {
    background-color: transparent;
  }

  .ant-tabs-nav-operations {
    display: none !important;
  }
`;
