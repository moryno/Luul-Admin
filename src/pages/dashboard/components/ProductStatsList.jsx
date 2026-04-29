import {
  AppIcon,
  StyledCard,
  StyledPrimaryTitle,
  TableComponent,
} from "@/components";
import { Flex } from "antd";

import ArrowUpIcon from "@assets/images/dashboard/arrow-up-right.svg?react";
import { StyledOverviewSecondaryTitle } from "../index.styled";
import { productColumns } from "@/pages/products/columns";
import { useProducts } from "@/hooks";
import { Link } from "react-router-dom";
import { PRODUCTS_ROUTE } from "@/lib";

const ProductStatsList = () => {
  const { products, isLoading } = useProducts({ page: 0, size: 10 });
  return (
    <StyledCard
      title={<StyledPrimaryTitle level={4}>Popular Product</StyledPrimaryTitle>}
      extra={
        <Link to={PRODUCTS_ROUTE}>
          <Flex gap="small" align="center">
            <StyledOverviewSecondaryTitle>
              Show All
            </StyledOverviewSecondaryTitle>
            <AppIcon Icon={ArrowUpIcon} size={26} />
          </Flex>
        </Link>
      }
    >
      <TableComponent
        dataSource={products || []}
        columns={productColumns}
        loading={isLoading}
      />
    </StyledCard>
  );
};

export default ProductStatsList;
