import { Flex } from "antd";
import FlyoutHeader from "./FlyoutHeader";
import { StyledFlyoutDrawer } from "../index.styled";

const FlyoutDrawer = ({
  open,
  onClose,
  children,
  icon,
  title,
  size = "large",
}) => {
  return (
    <StyledFlyoutDrawer
      open={open}
      destroyOnHidden={true}
      footer={null}
      onClose={onClose}
      placement="left"
      size={size}
    >
      <Flex vertical gap={16}>
        <FlyoutHeader title={title} icon={icon} toggle={onClose} />
        <div>{children}</div>
      </Flex>
    </StyledFlyoutDrawer>
  );
};

export default FlyoutDrawer;
