import { IconTypeEnum } from "./enums";
import SearchIcon from "@assets/images/icons/search.svg?react";
import AddIcon from "@assets/images/icons/add.svg?react";
import ExportIcon from "@assets/images/icons/export.svg?react";
import FilterIcon from "@assets/images/icons/filter.svg?react";

export const IconTypeIconsMap = {
  [IconTypeEnum.Search]: SearchIcon,
  [IconTypeEnum.Add]: AddIcon,
  [IconTypeEnum.Filter]: FilterIcon,
  [IconTypeEnum.Export]: ExportIcon,
};
