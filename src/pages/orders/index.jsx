import {
  AppIcon,
  AppTabs,
  InputComponent,
  StyledPageTitle,
  StyledPageWrapper,
  TableComponent,
  TabsWithText,
} from "@/components";
import {
  actionTypeOptions,
  IconTypeEnum,
  IconTypeIconsMap,
  orderTypeOptions,
} from "@/lib";
import { Flex, Row, Col } from "antd";

import { useState } from "react";

const Orders = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <StyledPageWrapper vertical gap="large">
      <StyledPageTitle level={3}>Orders</StyledPageTitle>
      <Row gutter={[24, 24]}>
        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
          <InputComponent
            type="search"
            placeholder="Search for iid, name of product..."
            suffix={<AppIcon Icon={IconTypeIconsMap[IconTypeEnum.Search]} />}
          />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={16} sm={12} xs={12}>
          <Flex justify="flex-end">
            <AppTabs
              // activeKey={activeTab}
              tabItems={actionTypeOptions}
              // onChange={onClickMenuItem}
            />
          </Flex>
        </Col>
      </Row>
      <Flex>
        <TabsWithText
          // activeKey={activeTab}
          tabItems={orderTypeOptions}
          // onChange={onClickMenuItem}
        />
      </Flex>
      <TableComponent />
    </StyledPageWrapper>
  );
};

export default Orders;
