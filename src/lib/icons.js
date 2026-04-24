import { IconTypeEnum, MenuIconTypeEnum } from "./enums";
import SearchIcon from "@assets/images/icons/search.svg?react";
import AddIcon from "@assets/images/icons/add.svg?react";
import ExportIcon from "@assets/images/icons/export.svg?react";
import FilterIcon from "@assets/images/icons/filter.svg?react";
import CloseIcon from "@assets/images/icons/close-circle.svg?react";
import ImageIcon from "@/assets/images/icons/image.svg?react";
import AccountIcon from "@assets/images/menu/profile-circle.svg?react";
import ProfileIcon from "@/assets/images/icons/user.svg?react";
import LogoutIcon from "@/assets/images/icons/sign-out.svg?react";
import NotificationIcon from "@assets/images/menu/notify.svg?react";
import InventoryIcon from "@/assets/images/icons/inventory.svg?react";
import OrderIcon from "@/assets/images/icons/order-history.svg?react";
import OverviewIcon from "@/assets/images/menu/overview.svg?react";
import OrdersMenuIcon from "@/assets/images/menu/orders.svg?react";
import ProductIcon from "@/assets/images/menu/products.svg?react";
import SettingsIcon from "@/assets/images/menu/settings.svg?react";

export const IconTypeIconsMap = {
  [IconTypeEnum.Search]: SearchIcon,
  [IconTypeEnum.Add]: AddIcon,
  [IconTypeEnum.Filter]: FilterIcon,
  [IconTypeEnum.Export]: ExportIcon,
  [IconTypeEnum.Import]: ExportIcon,
  [IconTypeEnum.Close]: CloseIcon,
  [IconTypeEnum.Image]: ImageIcon,
  [IconTypeEnum.Account]: AccountIcon,
  [IconTypeEnum.User]: ProfileIcon,
  [IconTypeEnum.LogOut]: LogoutIcon,
  [IconTypeEnum.Notification]: NotificationIcon,
  [IconTypeEnum.Order]: OrderIcon,
  [IconTypeEnum.Inventory]: InventoryIcon,
};

export const MenuTypeIconsMap = {
  [MenuIconTypeEnum.Overview]: OverviewIcon,
  [MenuIconTypeEnum.Product]: ProductIcon,
  [MenuIconTypeEnum.Order]: OrdersMenuIcon,
  [MenuIconTypeEnum.Settings]: SettingsIcon,
};
