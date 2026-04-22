import {
  AppFlyout,
  AppIcon,
  AppTabs,
  InputComponent,
  StyledPageTitle,
  StyledPageWrapper,
  TableComponent,
  TabsWithText,
} from "@/components";
import { useModal } from "@/hooks";
import {
  actionTypeOptions,
  actionTypes,
  IconTypeEnum,
  IconTypeIconsMap,
  orderTypeOptions,
} from "@/lib";
import { Flex, Row, Col } from "antd";

import { useCallback, useState } from "react";
import OrderForm from "./components/OrderForm";

const Orders = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { open, toggle } = useModal();

  const onClickActionItem = useCallback(
    (key) => {
      setActiveTab(key);
      switch (key) {
        case actionTypes.Add:
          toggle();
          break;

        default:
          break;
      }
    },
    [toggle],
  );

  const onCloseForm = useCallback(() => {
    setActiveTab(null);
    toggle();
  }, [toggle]);

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
              activeKey={activeTab}
              tabItems={actionTypeOptions}
              onChange={onClickActionItem}
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
      <AppFlyout
        open={open}
        onClose={onCloseForm}
        title="Create a new Order"
        width={700}
      >
        <OrderForm onClose={onCloseForm} />
      </AppFlyout>
    </StyledPageWrapper>
  );
};

export default Orders;
