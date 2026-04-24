import { Flex } from "antd";
import {
  StyledAppHeader,
  StyledRouteTitle,
  StyledHorizontalNav,
} from "./index.styled";
import AppNotification from "../components/AppNotification";
import AppAccount from "../components/AppAccount";
import { useLocation } from "react-router-dom";
import { getPageTitle } from "@/helpers";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <StyledAppHeader>
      <StyledRouteTitle level={2}>{getPageTitle(pathname)}</StyledRouteTitle>
      <StyledHorizontalNav>
        <Flex align="center" gap="middle">
          <AppNotification />
          <AppAccount />
        </Flex>
      </StyledHorizontalNav>
    </StyledAppHeader>
  );
};

export default Navbar;
