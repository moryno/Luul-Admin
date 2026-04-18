import OverviewIcon from "@/assets/images/menu/overview.svg?react";
import OrdersIcon from "@/assets/images/menu/orders.svg?react";
import ProductIcon from "@/assets/images/menu/products.svg?react";
import SettingsIcon from "@/assets/images/menu/settings.svg?react";
import {
  DASHBOARD_ROUTE,
  ORDERS_ROUTE,
  PRODUCTS_ROUTE,
  SETTINGS_ROUTE,
} from "./routes";

export const routesConfig = [
  {
    id: "dashboard",
    title: "Overview",
    messageId: "sidebar.dashboard",
    path: DASHBOARD_ROUTE,
    icon: OverviewIcon,
  },
  {
    id: "orders",
    title: "Orders",
    messageId: "sidebar.orders",
    path: ORDERS_ROUTE,
    icon: OrdersIcon,
  },
  {
    id: "products",
    title: "Products",
    messageId: "sidebar.products",
    path: PRODUCTS_ROUTE,
    icon: ProductIcon,
  },
  {
    id: "settings",
    title: "Settings",
    messageId: "sidebar.settings",
    path: SETTINGS_ROUTE,
    icon: SettingsIcon,
  },
];
