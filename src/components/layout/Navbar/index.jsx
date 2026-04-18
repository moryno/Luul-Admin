import { Flex, Typography } from "antd";
import { AccountContainer, IconWrapper, StyledAppHeader } from "./index.styled";
import { AppIcon } from "@/components/shared";
import Notify from "@assets/images/menu/notify.svg?react";
import Account from "@assets/images/menu/profile-circle.svg?react";

const { Text, Title } = Typography;
const Navbar = () => {
  return (
    <StyledAppHeader>
      <Flex>
        <Title level={3}>Overview</Title>
      </Flex>
      <Flex align="center" gap="medium">
        <IconWrapper>
          <AppIcon Icon={Notify} size={16} />
        </IconWrapper>
        <AccountContainer align="center" gap="small">
          <IconWrapper>
            <AppIcon Icon={Account} size={18} />
          </IconWrapper>
          <Text>John</Text>
        </AccountContainer>
      </Flex>
    </StyledAppHeader>
  );
};

export default Navbar;
