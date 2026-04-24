import { Dropdown, Typography } from "antd";

import { AppIcon } from "@/components/shared";

import { IconWrapper } from "../Navbar/index.styled";
import {
  StyledDropdownContainer,
  StyledDropdownHeader,
  StyledNotificationItem,
  StyledNotificationIconWrapper,
  StyledNotificationLabel,
  StyledNotificationText,
  StyledNotificationMeta,
} from "./index.styled";
import { IconTypeEnum, IconTypeIconsMap } from "@/lib";

const { Text } = Typography;

const notifications = [
  {
    id: 1,
    icon: IconTypeIconsMap[IconTypeEnum.Inventory],
    type: "danger",
    label: "Inventory Alert:",
    message: "Crimson Abaya out of stock",
    time: "11:00 AM",
  },
  {
    id: 2,
    icon: IconTypeIconsMap[IconTypeEnum.Order],
    type: "success",
    label: "New Order #46745",
    message: "placed successfully",
    time: "11:00 AM",
  },
  {
    id: 3,
    icon: IconTypeIconsMap[IconTypeEnum.Inventory],
    type: "danger",
    label: "Inventory Alert:",
    message: "Black Abaya low on stock",
    time: "10:30 AM",
  },
];

const NotificationContent = () => (
  <StyledDropdownContainer>
    <StyledDropdownHeader align="center" justify="space-between">
      <Text strong>Notifications</Text>
      <Text type="secondary" style={{ fontSize: 12 }}>
        {notifications.length} new
      </Text>
    </StyledDropdownHeader>

    {notifications.map((item) => (
      <StyledNotificationItem key={item.id} align="center" gap="middle">
        <StyledNotificationIconWrapper>
          <AppIcon Icon={item.icon} color="#195038" size={18} />
        </StyledNotificationIconWrapper>

        <StyledNotificationMeta vertical>
          <StyledNotificationLabel>
            <Text type={item.type} strong>
              {item.label}{" "}
            </Text>
            {item.message}
          </StyledNotificationLabel>
          <StyledNotificationText>{item.time}</StyledNotificationText>
        </StyledNotificationMeta>
      </StyledNotificationItem>
    ))}
  </StyledDropdownContainer>
);

const AppNotification = () => {
  return (
    <Dropdown
      popupRender={() => <NotificationContent />}
      trigger={["hover"]}
      placement="bottomRight"
    >
      <IconWrapper>
        <AppIcon Icon={IconTypeIconsMap[IconTypeEnum.Notification]} size={16} />
      </IconWrapper>
    </Dropdown>
  );
};

export default AppNotification;
