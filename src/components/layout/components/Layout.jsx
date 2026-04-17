import PropTypes from "prop-types";
import {
  StyledAppLayout,
  StyledAppLayoutContent,
  StyledAppLayoutMain,
} from "./index.styled";
import Navbar from "../Navbar";
import ContentView from "../ContentView";

const Layout = ({ routes, routesConfig }) => {
  return (
    <StyledAppLayout>
      <Navbar />
      <StyledAppLayoutMain>
        <StyledAppLayoutContent>
          <ContentView routes={routes} />
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
