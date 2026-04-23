import {
  Drawer,
  Flex,
  Form,
  Input,
  Modal,
  Table,
  Tabs,
  Typography,
} from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const StyledInput = styled(Input)`
  &::placeholder {
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.palette.placeholder};
    font-weight: 400;
  }
`;
export const StyledFormItem = styled(Form.Item)`
  width: ${({ width }) => width};
  label {
    color: ${({ theme }) => theme.palette.primary.accentColor} !important;
    font-weight: 500;
  }
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
export const StyledTable = styled(Table)`
  .ant-table-thead {
    background: ${({ theme }) => theme.table.headerBgColor} !important;
  }
  .ant-table-cell {
    background: transparent !important;
    padding: 8px 16px !important;
  }
  .ant-table-row {
    &:hover {
      background: ${({ theme }) => theme.table.cellHoverBgColor} !important;
      cursor: pointer;
    }
  }
`;

export const StyledFlyoutDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 16px !important;
    border-radius: 8px;
  }
  .ant-drawer-header {
    display: none !important;
  }
`;
export const StyledFlyoutHeader = styled(Flex)`
  padding: 8px 16px 16px !important;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.palette.grey["Cool Grey"][200]}`};
`;
export const StyledFlyoutHeaderTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.primary.accentColor} !important;
`;
export const StyledFlyoutModal = styled(Modal)`
  .ant-modal-content {
    padding: 0px !important;
    border-radius: 8px;
  }
  .ant-modal-header {
    display: none !important;
  }
`;
export const StyledFlyoutContent = styled.div`
  padding: 0px 24px 16px !important;
`;
export const StyledChartWrapper = styled(Flex)`
  *:focus {
    outline: none;
  }
`;
