import React, { useCallback, useState } from "react";
import {
  StyledPageWrapper,
  StyledPageTitle,
  AppPageSearchFilter,
  TableComponent,
  StyledCard,
} from "@/components";
import {
  productActionTypeOptions,
  productActionTypes,
  PRODUCTS_ROUTE,
} from "@/lib";
import ProductStats from "./components/ProductStats";
import { useCommon } from "@/hooks";

const Products = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { onRedirect } = useCommon();

  const onClickActionItem = useCallback(
    (key) => {
      setActiveTab(key);
      switch (key) {
        case productActionTypes.Add:
          onRedirect(`${PRODUCTS_ROUTE}/new`)();
          break;

        default:
          break;
      }
    },
    [onRedirect],
  );

  return (
    <StyledPageWrapper vertical gap="large">
      <StyledPageTitle level={3}>Product</StyledPageTitle>
      <AppPageSearchFilter
        activeTab={activeTab}
        tabItems={productActionTypeOptions}
        onTabChange={onClickActionItem}
      />
      <ProductStats />
      <StyledCard>
        <TableComponent />
      </StyledCard>
    </StyledPageWrapper>
  );
};

export default Products;
