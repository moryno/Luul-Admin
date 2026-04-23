import React from "react";
import { StyledPageWrapper } from "@/components";
import CardStatsList from "./components/CardStatsList";
import SalesStatistics from "./components/SalesStatistics";
import ProductStatsList from "./components/ProductStatsList";

const Dashboard = () => {
  return (
    <StyledPageWrapper vertical gap="large">
      <CardStatsList />
      <SalesStatistics />
      <ProductStatsList />
    </StyledPageWrapper>
  );
};

export default Dashboard;
