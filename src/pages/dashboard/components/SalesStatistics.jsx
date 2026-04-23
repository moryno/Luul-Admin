import {
  AppIcon,
  AppLineChart,
  StyledCard,
  StyledPrimaryTitle,
} from "@/components";
import { Flex, Segmented } from "antd";

import MoreIcon from "@assets/images/dashboard/ellipses.svg?react";

const SalesStatistics = () => {
  return (
    <StyledCard
      title={
        <StyledPrimaryTitle level={4}>Sales Statistics</StyledPrimaryTitle>
      }
      extra={
        <Flex gap="small" align="center">
          <Segmented options={["Weekly", "Monthly"]} />
          <AppIcon Icon={MoreIcon} size={16} />
        </Flex>
      }
    >
      <AppLineChart />
    </StyledCard>
  );
};

export default SalesStatistics;
