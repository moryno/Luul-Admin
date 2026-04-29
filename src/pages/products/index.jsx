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
import { useCommon, useProducts } from "@/hooks";
import { productColumns } from "./columns";

const Products = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { onRedirect } = useCommon();
  const { products, totalProducts, currentPage, totalPages, isLoading } =
    useProducts({ page: 0, size: 10 });

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

  console.log(products);

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
        <TableComponent
          dataSource={products || []}
          columns={productColumns}
          loading={isLoading}
        />
      </StyledCard>
    </StyledPageWrapper>
  );
};

export default Products;
