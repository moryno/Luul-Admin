import React, { useCallback, useState } from "react";
import {
  StyledPageWrapper,
  StyledPageTitle,
  AppPageSearchFilter,
} from "@/components";
import { productActionTypeOptions, productActionTypes } from "@/lib";
import ProductStats from "./components/ProductStats";

const Products = () => {
  const [activeTab, setActiveTab] = useState(null);

  const onClickActionItem = useCallback((key) => {
    setActiveTab(key);
    switch (key) {
      case productActionTypes.Add:
        break;

      default:
        break;
    }
  }, []);

  return (
    <StyledPageWrapper vertical gap="large">
      <StyledPageTitle level={3}>Product</StyledPageTitle>
      <AppPageSearchFilter
        activeTab={activeTab}
        tabItems={productActionTypeOptions}
        onTabChange={onClickActionItem}
      />
      <ProductStats />
    </StyledPageWrapper>
  );
};

export default Products;
