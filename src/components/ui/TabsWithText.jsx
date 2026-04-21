import { useMemo } from "react";
import { Flex } from "antd";
import PropTypes from "prop-types";
import { StyledTabWithText } from "./index.styled";

const TabsWithText = ({
  activeKey = undefined,
  tabItems,
  onChange = null,
  ...restProps
}) => {
  const items = useMemo(() => {
    return tabItems.map((item, index) => {
      return {
        label: <Flex align="center">{`${item.label} (${item.count})`}</Flex>,
        key: item?.key || index,
        children: item?.children || null,
      };
    });
  }, [tabItems]);

  return (
    <StyledTabWithText
      activeKey={activeKey}
      items={items}
      onChange={onChange}
      {...restProps}
    />
  );
};
TabsWithText.propTypes = {
  tabItems: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  activeKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default TabsWithText;
