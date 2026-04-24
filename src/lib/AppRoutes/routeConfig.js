import { MenuIconTypeEnum } from "../enums";
import { MenuTypeIconsMap } from "../icons";
import {
  DASHBOARD_ROUTE,
  ORDERS_ROUTE,
  PRODUCTS_ROUTE,
  SETTINGS_ROUTE,
} from "../routes";

export const routesConfig = [
  {
    id: "dashboard",
    title: "Overview",
    messageId: "sidebar.dashboard",
    path: DASHBOARD_ROUTE,
    icon: MenuTypeIconsMap[MenuIconTypeEnum.Overview],
  },
  {
    id: "orders",
    title: "Orders",
    messageId: "sidebar.orders",
    path: ORDERS_ROUTE,
    icon: MenuTypeIconsMap[MenuIconTypeEnum.Order],
  },
  {
    id: "products",
    title: "Products",
    messageId: "sidebar.products",
    path: PRODUCTS_ROUTE,
    icon: MenuTypeIconsMap[MenuIconTypeEnum.Product],
  },
  {
    id: "settings",
    title: "Settings",
    messageId: "sidebar.settings",
    path: SETTINGS_ROUTE,
    icon: MenuTypeIconsMap[MenuIconTypeEnum.Settings],
  },
];
