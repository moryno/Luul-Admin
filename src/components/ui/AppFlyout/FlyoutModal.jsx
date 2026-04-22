import { Flex } from "antd";
import FlyoutHeader from "./FlyoutHeader";
import { StyledFlyoutContent, StyledFlyoutModal } from "../index.styled";

const FlyoutModal = ({ open, width, onClose, children, icon, title }) => {
  return (
    <StyledFlyoutModal
      open={open}
      footer={null}
      width={width}
      onCancel={onClose}
      closeIcon={null}
      destroyOnHidden={true}
    >
      <Flex vertical gap={16}>
        <FlyoutHeader title={title} icon={icon} toggle={onClose} />
        <StyledFlyoutContent>{children}</StyledFlyoutContent>
      </Flex>
    </StyledFlyoutModal>
  );
};

export default FlyoutModal;
