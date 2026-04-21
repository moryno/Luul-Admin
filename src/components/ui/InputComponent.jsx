import { useMemo } from "react";
import { StyledInput, StyledFormItem } from "./index.styled";

const InputComponent = ({
  name,
  label,
  rule = { required: true, message: `Please enter ${name}` },
  type = "text",
  size = "large",
  placeholder,
  disabled = false,
  prefix = null,
  suffix = null,
  isFormItem = false,
}) => {
  const inputComponent = useMemo(() => {
    let input;
    if (isFormItem) {
      input = (
        <StyledFormItem name={name} label={label} rules={[rule]}>
          <StyledInput
            disabled={disabled}
            type={type}
            size={size}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
          />
        </StyledFormItem>
      );
    } else {
      input = (
        <StyledInput
          disabled={disabled}
          type={type}
          size={size}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
        />
      );
    }
    return input;
  }, [
    disabled,
    isFormItem,
    label,
    name,
    placeholder,
    prefix,
    rule,
    size,
    suffix,
    type,
  ]);

  return inputComponent;
};

export default InputComponent;
