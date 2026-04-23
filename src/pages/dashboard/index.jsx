import React, { useCallback, useState } from "react";
import {
  StyledPageWrapper,
  StyledPageTitle,
  AppPageSearchFilter,
  TableComponent,
  StyledCard,
} from "@/components";
import CardStatsList from "./components/CardStatsList";
import SalesStatistics from "./components/SalesStatistics";

const Dashboard = () => {
  return (
    <StyledPageWrapper vertical gap="large">
      <CardStatsList />
      <SalesStatistics />
    </StyledPageWrapper>
  );
};

export default Dashboard;
