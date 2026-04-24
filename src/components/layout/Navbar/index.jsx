import { Flex } from "antd";
import {
  StyledAppHeader,
  StyledRouteTitle,
  StyledHorizontalNav,
} from "./index.styled";
import AppNotification from "../components/AppNotification";
import AppAccount from "../components/AppAccount";

const Navbar = () => {
  return (
    <StyledAppHeader>
      <StyledRouteTitle level={2}>Overview</StyledRouteTitle>
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
