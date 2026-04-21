import { useMemo } from "react";
import { Flex } from "antd";
import PropTypes from "prop-types";
import { StyledAppTabs } from "./index.styled";

const AppTabs = ({
  activeKey = undefined,
  tabItems,
  onChange = null,
  ...restProps
}) => {
  const items = useMemo(() => {
    return tabItems.map((item, index) => {
      return {
        label: (
          <Flex gap={8} align="center">
            {item.label}
            {item.icon}
          </Flex>
        ),
        key: item?.key || index,
        children: item?.children || null,
      };
    });
  }, [tabItems]);

  return (
    <StyledAppTabs
      activeKey={activeKey}
      items={items}
      onChange={onChange}
      {...restProps}
    />
  );
};
AppTabs.propTypes = {
  tabItems: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  activeKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default AppTabs;
