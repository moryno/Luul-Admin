import { Flex } from "antd";
import { StyledFlyoutHeader, StyledFlyoutHeaderTitle } from "../index.styled";

import { AppIcon } from "@/components/shared";
import { IconTypeEnum, IconTypeIconsMap } from "@/lib";

const FlyoutHeader = ({ icon: Icon, title, toggle }) => {
  return (
    <StyledFlyoutHeader justify="space-between" align="center">
      <Flex gap={6} align="center">
        {Icon && <Icon size={24} />}
        <StyledFlyoutHeaderTitle level={5}>{title}</StyledFlyoutHeaderTitle>
      </Flex>

      <AppIcon onClick={toggle} Icon={IconTypeIconsMap[IconTypeEnum.Close]} />
    </StyledFlyoutHeader>
  );
};

export default FlyoutHeader;
