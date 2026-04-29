import { useMemo } from "react";
import { StyledSelect, StyledFormItem } from "./index.styled";

const SelectComponent = ({
  name,
  label,
  mode = null,
  rule = { required: true, message: `Please enter ${name}` },
  size = "large",
  placeholder,
  disabled = false,
  loading = false,
  options = [],
  isFormItem = false,
  ...rest
}) => {
  const selectComponent = useMemo(() => {
    let input;
    if (isFormItem) {
      input = (
        <StyledFormItem name={name} label={label} rules={[rule]}>
          <StyledSelect
            mode={mode}
            disabled={disabled}
            size={size}
            placeholder={placeholder}
            options={options}
            loading={loading}
            {...rest}
          />
        </StyledFormItem>
      );
    } else {
      input = (
        <StyledSelect
          mode={mode}
          disabled={disabled}
          size={size}
          placeholder={placeholder}
          options={options}
          loading={loading}
          {...rest}
        />
      );
    }
    return input;
  }, [
    disabled,
    isFormItem,
    label,
    loading,
    mode,
    name,
    options,
    placeholder,
    rest,
    rule,
    size,
  ]);

  return selectComponent;
};

export default SelectComponent;
