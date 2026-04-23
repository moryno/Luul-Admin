import { useCallback, useState } from "react";
import { Flex } from "antd";

import {
  AppFlyout,
  AppPageSearchFilter,
  StyledPageTitle,
  StyledPageWrapper,
  TableComponent,
  TabsWithText,
} from "@/components";
import { useModal } from "@/hooks";
import { orderActionTypeOptions, actionTypes, orderTypeOptions } from "@/lib";
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
      <AppPageSearchFilter
        activeTab={activeTab}
        tabItems={orderActionTypeOptions}
        onTabChange={onClickActionItem}
      />
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
