import { Layout } from "antd";
import PropTypes from "prop-types";

import { SiderContainer, StyleLogoContainer } from "./index.styled";
import { AppLogo } from "@/components/shared";
import AppVerticalNav from "./AppVerticalNav";

const { Sider } = Layout;

const Sidebar = ({ routesConfig = [] }) => {
  return (
    <SiderContainer>
      <Sider width={240} theme="light">
        <StyleLogoContainer>
          <AppLogo />
        </StyleLogoContainer>
        <AppVerticalNav routesConfig={routesConfig} />
      </Sider>
    </SiderContainer>
  );
};
Sidebar.prototype = {
  routesConfig: PropTypes.array,
};
export default Sidebar;
