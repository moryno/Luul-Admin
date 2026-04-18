import { Link } from "react-router-dom";
import { isValidElement } from "react";
import { Flex } from "antd";
import { AppIcon, StyledNewTag } from "@/components";

const getIcon = (icon) => {
  return (
    icon &&
    (isValidElement(icon) ? <AppIcon Icon={icon} /> : <AppIcon Icon={icon} />)
  );
};

const renderMenuItemChildren = (item) => {
  const { icon, messageId, path, isNew } = item;
  if (path && path.includes("/"))
    return {
      key: item.path,
      icon: getIcon(icon),
      label: (
        <Flex align="center" justify="space-between">
          <Link to={path}>
            <span data-testid={messageId.toLowerCase + "-nav"}>
              {item.title}
            </span>
          </Link>
          {isNew && <StyledNewTag>NEW</StyledNewTag>}
        </Flex>
      ),
    };
  else {
    return {
      key: item.path ? item.path : item.id,
      icon: getIcon(icon),
      label: (
        <span data-testid={messageId.toLowerCase + "-nav"}>{item.title}</span>
      ),
    };
  }
};

const renderMenuItem = (item) => {
  return item.type === "collapse" || item.type === "group"
    ? {
        key: item.path,
        ...renderMenuItemChildren(item),
        children: item.children.map((item) =>
          renderMenuItem({ ...item, icon: item.icon }),
        ),
        type: item.type,
      }
    : {
        key: item.path,
        ...renderMenuItemChildren(item),
      };
};

const renderMenu = (item) => {
  return item.type === "group" || item.type === "collapse"
    ? {
        key: item.path ? item.path : item.id,
        ...renderMenuItemChildren(item),
        children: item.children.map((item) =>
          renderMenuItem({ ...item, icon: item.icon }),
        ),
        type: item.type,
      }
    : {
        key: item.path,
        exact: item.exact,
        ...renderMenuItemChildren(item),
      };
};

export const getRouteMenus = (routesConfig) => {
  return routesConfig.map((route) => renderMenu(route));
};
