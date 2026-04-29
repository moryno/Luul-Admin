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
import { IconTypeEnum, IconTypeIconsMap, SETTINGS_ROUTE } from "@/lib";
import { useAppDispatch, useAuth } from "@/hooks";
import { getAbbreviation } from "@/helpers";
import { logout } from "@/store/slices/authSlice";

const AccountContent = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <StyledDropdownContainer>
      <StyledAccountHeader align="center" gap="small">
        <StyledMenuItemAvatar size={36}>
          {getAbbreviation(user?.firstName)}
        </StyledMenuItemAvatar>
        <div>
          <StyledProfileLabel>{`${user.firstName} ${user.lastName}`}</StyledProfileLabel>
          <div style={{ fontSize: 12, color: "#949494" }}>{user?.email}</div>
        </div>
      </StyledAccountHeader>

      <StyledAccountMenuItem align="center" gap="middle">
        <AppIcon
          Icon={IconTypeIconsMap[IconTypeEnum.User]}
          size={16}
          iconType="fill"
        />
        <StyledMenuItemLabel to={SETTINGS_ROUTE}>
          Edit Profile
        </StyledMenuItemLabel>
      </StyledAccountMenuItem>

      <StyledAccountMenuItem align="center" gap="middle" $danger>
        <AppIcon
          Icon={IconTypeIconsMap[IconTypeEnum.LogOut]}
          color="#D92D20"
          size={16}
        />
        <StyledMenuItemLabel onClick={onLogOut}>Logout</StyledMenuItemLabel>
      </StyledAccountMenuItem>
    </StyledDropdownContainer>
  );
};

const AppAccount = () => {
  const { user } = useAuth();

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
        {user && <span>{user.firstName}</span>}
      </AccountContainer>
    </Dropdown>
  );
};

export default AppAccount;
