import React from "react";
import { Flex, Typography, Row, Col, Image } from "antd";
import { StyledShippingStatus, StyledProductSummary } from "../index.styled";
import { StyledDivider } from "@/components";
import TestImg from "@assets/images/Hamlet.png";

const { Title, Text } = Typography;

const ShippingDetail = () => {
  return (
    <Flex vertical gap="middle">
      <Flex>
        <Flex gap="large">
          <Title level={3}>#64749</Title>
          <StyledShippingStatus>shipping</StyledShippingStatus>
        </Flex>
      </Flex>
      <Row gutter={[12, 12]}>
        <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
          <Flex vertical gap="middle" align="flex-start">
            <Text>Product</Text>
            <Flex gap="middle">
              <Image
                height={"auto"}
                alt="abaya-img"
                width={84}
                preview={false}
                src={TestImg}
              />

              <Text>Abaya</Text>
            </Flex>
          </Flex>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <Flex vertical gap="middle" align="flex-start">
            <Text>Sku</Text>
            <Text>Aba-8654</Text>
          </Flex>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <Flex vertical gap="middle" align="flex-start">
            <Text>Price</Text>
            <Text>Ksh 2500</Text>
          </Flex>
        </Col>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
          <Flex vertical gap="middle" align="center">
            <Text>Qty</Text>
            <Text>2</Text>
          </Flex>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <Flex vertical gap="middle" align="flex-start">
            <Text>Total</Text>
            <Text>Ksh 5000</Text>
          </Flex>
        </Col>
      </Row>
      <StyledDivider />
      <StyledProductSummary vertical gap={14}>
        <Flex align="center" justify="space-between">
          <Text>Subtotal</Text>
          <Text>Ksh 0.0</Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text>Delivery</Text>
          <Text>Ksh 230.0</Text>
        </Flex>
        <StyledDivider />
        <Flex align="center" justify="space-between">
          <Text strong>Delivery</Text>
          <Text strong>Ksh 230.0</Text>
        </Flex>
      </StyledProductSummary>
      <StyledDivider />
      <StyledProductSummary vertical gap="small">
        <Title level={5}>Billing Information</Title>
        <Text>Jonie Doe Nairobi, Kenya</Text>
        <Text>joniedoi@gmail.com</Text>
        <Text>+254715011141</Text>
      </StyledProductSummary>
    </Flex>
  );
};

export default ShippingDetail;
