import { AppIcon } from "@/components";
import { IconTypeIconsMap } from "./icons";

export const actionTypes = {
  Filter: "Filter",
  Export: "Export",
  Add: "New Order",
};
export const orderTypes = {
  All: "All Orders",
  Shipping: "Shipping",
  Completed: "Completed",
  Cancelled: "Cancelled",
};

export const actionTypeOptions = Object.entries(actionTypes).map(([k, v]) => ({
  key: k,
  label: v,
  icon: <AppIcon Icon={IconTypeIconsMap[k]} size={16} />,
}));
export const orderTypeOptions = Object.values(orderTypes).map((v) => ({
  key: v,
  label: v,
  count: 100,
}));
