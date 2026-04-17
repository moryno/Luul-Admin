import { Flex } from "antd";
import { AccountContainer, IconWrapper, StyledAppHeader } from "./index.styled";
import { AppLogo, AppIcon } from "@/components/shared";
import Notify from "@assets/images/menu/notify.svg?react";
import Account from "@assets/images/menu/profile-circle.svg?react";

const Navbar = () => {
  return (
    <StyledAppHeader>
      <Flex>
        <AppLogo />
      </Flex>
      <Flex align="center" gap="medium">
        <IconWrapper>
          <AppIcon Icon={Notify} size={16} />
        </IconWrapper>
        <AccountContainer align="center" gap="small">
          <IconWrapper>
            <AppIcon Icon={Account} size={18} />
          </IconWrapper>
          <span>John</span>
        </AccountContainer>
      </Flex>
    </StyledAppHeader>
  );
};

export default Navbar;
