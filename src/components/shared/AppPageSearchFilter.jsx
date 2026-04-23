import { Flex, Row, Col } from "antd";
import { IconTypeEnum, IconTypeIconsMap } from "@/lib";
import { AppTabs, InputComponent } from "../ui";
import AppIcon from "./AppIcon";

const AppPageSearchFilter = ({
  activeTab = null,
  tabItems = [],
  onTabChange = null,
}) => {
  return (
    <Row gutter={[24, 24]}>
      <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
        <InputComponent
          type="search"
          placeholder="Search..."
          suffix={<AppIcon Icon={IconTypeIconsMap[IconTypeEnum.Search]} />}
        />
      </Col>
      <Col xxl={16} xl={16} lg={16} md={16} sm={12} xs={12}>
        <Flex justify="flex-end">
          <AppTabs
            activeKey={activeTab}
            tabItems={tabItems}
            onChange={onTabChange}
          />
        </Flex>
      </Col>
    </Row>
  );
};

export default AppPageSearchFilter;
