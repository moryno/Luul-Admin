import { Dropdown } from "antd";
import { AppIcon } from "@/components/shared";

import { AccountContainer, IconWrapper } from "../Navbar/index.styled";
import {
  StyledDropdownContainer,
  StyledAccountHeader,
  StyledMenuItemAvatar,
  StyledAccountMenuItem,
  StyledMenuItemLabel,
  StyledProfileLabel,
} from "./index.styled";
import { IconTypeEnum, IconTypeIconsMap } from "@/lib";

const AccountContent = () => (
  <StyledDropdownContainer>
    <StyledAccountHeader align="center" gap="small">
      <StyledMenuItemAvatar size={36}>J</StyledMenuItemAvatar>
      <div>
        <StyledProfileLabel>Jane Doe</StyledProfileLabel>
        <div style={{ fontSize: 12, color: "#949494" }}>jane@example.com</div>
      </div>
    </StyledAccountHeader>

    <StyledAccountMenuItem align="center" gap="middle">
      <AppIcon
        Icon={IconTypeIconsMap[IconTypeEnum.User]}
        size={16}
        iconType="fill"
      />
      <StyledMenuItemLabel>Edit Profile</StyledMenuItemLabel>
    </StyledAccountMenuItem>

    <StyledAccountMenuItem align="center" gap="middle" $danger>
      <AppIcon
        Icon={IconTypeIconsMap[IconTypeEnum.LogOut]}
        color="#D92D20"
        size={16}
      />
      <StyledMenuItemLabel>Logout</StyledMenuItemLabel>
    </StyledAccountMenuItem>
  </StyledDropdownContainer>
);

const AppAccount = () => {
  return (
    <Dropdown
      popupRender={() => <AccountContent />}
      trigger={["hover"]}
      placement="bottomRight"
    >
      <AccountContainer
        align="center"
        gap="small"
        style={{ cursor: "pointer" }}
      >
        <IconWrapper>
          <AppIcon Icon={IconTypeIconsMap[IconTypeEnum.Account]} size={18} />
        </IconWrapper>
        <span>Jong</span>
      </AccountContainer>
    </Dropdown>
  );
};

export default AppAccount;
