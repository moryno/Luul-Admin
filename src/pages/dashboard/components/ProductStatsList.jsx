import {
  AppIcon,
  StyledCard,
  StyledPrimaryTitle,
  TableComponent,
} from "@/components";
import { Flex } from "antd";

import ArrowUpIcon from "@assets/images/dashboard/arrow-up-right.svg?react";
import { StyledOverviewSecondaryTitle } from "../index.styled";

const ProductStatsList = () => {
  return (
    <StyledCard
      title={<StyledPrimaryTitle level={4}>Popular Product</StyledPrimaryTitle>}
      extra={
        <Flex gap="small" align="center">
          <StyledOverviewSecondaryTitle>Show All</StyledOverviewSecondaryTitle>
          <AppIcon Icon={ArrowUpIcon} size={26} />
        </Flex>
      }
    >
      <TableComponent />
    </StyledCard>
  );
};

export default ProductStatsList;
