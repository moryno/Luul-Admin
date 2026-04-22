import FlyoutDrawer from "./FlyoutDrawer";
import FlyoutModal from "./FlyoutModal";

const AppFlyout = ({
  children,
  open,
  onClose,
  title,
  icon,
  width = "fit-content",
  size = "auto",
  type = "Modal",
}) => {
  return type === "Modal" ? (
    <FlyoutModal
      open={open}
      title={title}
      icon={icon}
      onClose={onClose}
      width={width}
    >
      {children}
    </FlyoutModal>
  ) : (
    <FlyoutDrawer
      open={open}
      title={title}
      icon={icon}
      onClose={onClose}
      size={size}
    >
      {children}
    </FlyoutDrawer>
  );
};

export default AppFlyout;
