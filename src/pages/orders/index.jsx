import {
  AppIcon,
  AppTabs,
  InputComponent,
  StyledPageTitle,
  StyledPageWrapper,
  TabsWithText,
} from "@/components";
import {
  actionTypeOptions,
  IconTypeEnum,
  IconTypeIconsMap,
  orderTypeOptions,
} from "@/lib";
import { Flex } from "antd";

import { useState } from "react";

const Orders = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <StyledPageWrapper vertical gap="medium">
      <StyledPageTitle level={3}>Orders</StyledPageTitle>
      <Flex align="center" justify="space-between">
        <InputComponent
          type="search"
          placeholder="Search for iid, name of product..."
          suffix={<AppIcon Icon={IconTypeIconsMap[IconTypeEnum.Search]} />}
          isFormItem
        />
        <Flex>
          <AppTabs
            // activeKey={activeTab}
            tabItems={actionTypeOptions}
            // onChange={onClickMenuItem}
          />
        </Flex>
      </Flex>
      <Flex>
        <TabsWithText
          // activeKey={activeTab}
          tabItems={orderTypeOptions}
          // onChange={onClickMenuItem}
        />
      </Flex>
    </StyledPageWrapper>
  );
};

export default Orders;
