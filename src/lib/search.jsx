import { AppIcon } from "@/components";
import { IconTypeIconsMap } from "./icons";

export const actionTypes = {
  Filter: "Filter",
  Export: "Export",
  Add: "New Order",
};
export const productActionTypes = {
  Filter: "Filter",
  Export: "Export",
  Import: "Import",
  Add: "New Product",
};
export const orderTypes = {
  All: "All Orders",
  Shipping: "Shipping",
  Completed: "Completed",
  Cancelled: "Cancelled",
};

export const orderActionTypeOptions = Object.values(actionTypes).map((v) => ({
  key: v,
  label: v,
  icon: <AppIcon Icon={IconTypeIconsMap[v]} size={16} />,
}));

export const orderTypeOptions = Object.values(orderTypes).map((v) => ({
  key: v,
  label: v,
  count: 100,
}));
export const productActionTypeOptions = Object.values(productActionTypes).map(
  (v) => ({
    key: v,
    label: v,
    icon: <AppIcon Icon={IconTypeIconsMap[v]} size={16} />,
  }),
);

export const productSizeAttributes = [
  { value: "S", label: "Small" },
  { value: "M", label: "Medium" },
  { value: "L", label: "Large" },
  { value: "XL", label: "Extra Large" },
  { value: "XXL", label: "Double XL" },
  { value: "XXXL", label: "Tripple XL" },
];
