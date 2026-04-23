import { Col, Flex, Row, Form } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";

import {
  InputComponent,
  StyledCard,
  StyledPageTitle,
  StyledPageWrapper,
} from "@/components";
import {
  StyledProfileButton,
  StyledProfileAvatar,
  StyledProfileName,
  StyledProfileRole,
  StyledPasswordTitle,
  StyledPasswordText,
} from "./index.styled";

const index = () => {
  return (
    <StyledPageWrapper vertical gap="large">
      <StyledCard>
        <StyledCard
          title={<StyledPageTitle level={4}>Profile</StyledPageTitle>}
          extra={
            <Flex>
              <StyledProfileButton icon={<EditOutlined />} size="small">
                Edit
              </StyledProfileButton>
            </Flex>
          }
        >
          <Flex vertical gap="large">
            <Flex gap="medium">
              <StyledProfileAvatar size={64} icon={<UserOutlined />} />
              <Flex vertical>
                <StyledProfileName>John Njoroge</StyledProfileName>
                <StyledProfileRole>Administrator</StyledProfileRole>
              </Flex>
            </Flex>
            <Form layout="vertical">
              <Row gutter={[24, 24]}>
                <Col span={12}>
                  <InputComponent
                    name="fullName"
                    label="Full Name"
                    placeholder="John Njoroge"
                    isFormItem
                  />
                </Col>
                <Col span={12}>
                  <InputComponent
                    name="email"
                    label="Email"
                    placeholder="johnnjoroge@gmail.com"
                    isFormItem
                  />
                </Col>
              </Row>
              <Flex vertical>
                <Flex align="center" justify="space-between">
                  <Flex vertical>
                    <StyledPasswordTitle>Password</StyledPasswordTitle>
                    <StyledPasswordText>
                      Last change 30 days ago
                    </StyledPasswordText>
                  </Flex>
                  <StyledProfileButton icon={<EditOutlined />} size="small">
                    Update password
                  </StyledProfileButton>
                </Flex>
              </Flex>
            </Form>
          </Flex>
        </StyledCard>
      </StyledCard>
    </StyledPageWrapper>
  );
};

export default index;
