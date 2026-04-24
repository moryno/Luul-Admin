import styled from "styled-components";

export const SiderContainer = styled.div`
  height: 100vh;
  flex-shrink: 0;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .ant-layout-sider {
    height: 100%;
    background: ${({ theme }) => theme.sideBar.sidebarBgColor} !important;
  }
`;

export const StyledVerticalNav = styled.div`
  .ant-menu {
    border-inline-end: none !important;
    padding: 0px;
    background: inherit;

    .ant-menu-item {
      padding: 8px !important;
      margin: 0px !important;
      width: 100% !important;

      &.ant-menu-item-only-child {
        &.ant-menu-item-selected {
          padding-left: 12px !important;
        }
      }

      .ant-menu-title-content {
        padding-left: 8px !important;
      }
    }
    .ant-menu-item.ant-menu-item-selected {
      border-top-left-radius: 0px !important;
      border-bottom-left-radius: 0px !important;
      border-left: 2px solid #195038 !important;
      svg {
        path:not([fill="none"]) {
          stroke: ${({ theme }) => theme.palette.primary.main} !important;
        }
      }
    }

    .ant-menu-submenu {
      .ant-menu-submenu-title {
        padding-left: 0px !important;
      }
      .ant-menu-submenu-arrow {
        display: none !important;
      }
      .ant-menu-sub {
        .ant-menu-title-content {
          padding-left: 12px !important;
        }
      }
    }
  }
`;
