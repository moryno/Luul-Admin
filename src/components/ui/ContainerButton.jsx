import { Button } from "antd";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { defaultTheme } from "@/lib";

const ContainerButton = ({
  title,
  type,
  size,
  loading,
  width,
  fullWidth,
  htmlType,
  onClick,
  icon,
  innerRef,
  disabled,
  danger,
  isAccent,
  shape,
  ghost = false,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      size={size}
      loading={loading}
      width={fullWidth ? "100%" : `${width}px`}
      htmlType={htmlType}
      icon={icon}
      ref={innerRef}
      disabled={disabled}
      danger={danger}
      primary_background_color={
        isAccent ? defaultTheme.theme.palette.primary.accentColor : null
      }
      shape={shape}
      ghost={ghost}
      onClick={onClick}
      {...rest}
    >
      {title}
    </StyledButton>
  );
};

ContainerButton.prototype = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf([
    "primary",
    "ghost",
    "dashed",
    "link",
    "text",
    "default",
  ]),
  size: PropTypes.oneOf(["large", "middle", "small"]),
  shape: PropTypes.oneOf(["default", "circle", "round"]),
  htmlType: PropTypes.oneOf(["submit", "button"]),
  loading: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  innerRef: PropTypes.oneOfType([PropTypes.func]),
  disabled: PropTypes.bool,
  isAccent: PropTypes.bool,
  danger: PropTypes.bool,
  ghost: PropTypes.bool,
};
ContainerButton.defaultProps = {
  type: "default",
  size: "small",
  shape: "default",
  loading: false,
  width: "",
  htmlType: "button",
  onClick: null,
  fullWidth: false,
  icon: null,
  innerRef: null,
  disabled: false,
  isAccent: false,
  danger: false,
};

const StyledButton = styled(Button)`
  width: ${({ width }) => width};
  font-weight: 500;
  border-radius: 8px;
  border: ${({ type }) => (type === "dashed" ? "2px" : "none")};
  svg {
    vertical-align: middle;
  }
  &.ant-btn-primary {
    background-color: ${({ primary_background_color }) =>
      primary_background_color};
    box-shadow: none !important;
  }
  &.ant-btn-primary:not(:disabled):hover {
    background-color: ${({ primary_background_color }) =>
      primary_background_color};
  }
  &.ant-btn-primary:disabled,
  &.ant-btn-default:disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: ${({ width }) => (width === "100%" ? width : "auto")};
  }
`;
export default ContainerButton;
