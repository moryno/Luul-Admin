import PropTypes from "prop-types";

import { StyledVerticalNav } from "./index.styled";
import { Menu } from "antd";
import { getRouteMenus } from "@/helpers";
import { useLocation } from "react-router-dom";

const AppVerticalNav = ({ routesConfig }) => {
  const { pathname } = useLocation();

  return (
    <StyledVerticalNav>
      <Menu
        theme={"light"}
        items={getRouteMenus(routesConfig)}
        mode="inline"
        selectedKeys={[pathname]}
      />
    </StyledVerticalNav>
  );
};
AppVerticalNav.prototype = {
  routesConfig: PropTypes.array,
};
export default AppVerticalNav;
