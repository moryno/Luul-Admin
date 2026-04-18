import PropTypes from "prop-types";
import {
  StyledAppLayout,
  StyledAppLayoutContent,
  StyledAppLayoutMain,
} from "./index.styled";
import Navbar from "../Navbar";
import ContentView from "../ContentView";
import { Flex } from "antd";
import Sidebar from "../Sidebar";

const Layout = ({ routes, routesConfig }) => {
  return (
    <StyledAppLayout>
      <StyledAppLayoutMain>
        <StyledAppLayoutContent>
          <Flex>
            <Sidebar routesConfig={routesConfig} />
            <Flex vertical style={{ position: "relative", width: "100%" }}>
              <Navbar />
              {/* scroll conentview only */}
              <ContentView routes={routes} />
            </Flex>
          </Flex>
        </StyledAppLayoutContent>
      </StyledAppLayoutMain>
    </StyledAppLayout>
  );
};

Layout.prototype = {
  routes: PropTypes.array.isRequired,
  routesConfig: PropTypes.array.isRequired,
};
export default Layout;
