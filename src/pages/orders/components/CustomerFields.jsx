import { Col, Row } from "antd";
import { InputComponent, StyledDivider } from "@/components";

const CustomerFields = () => {
  return (
    <>
      <Row gutter={12}>
        <Col span={12}>
          <InputComponent
            name="fullName"
            label="Full Name"
            placeholder="Enter name"
            isFormItem
          />
        </Col>
        <Col span={12}>
          <InputComponent
            name="phone"
            label="Phone"
            placeholder="+254"
            isFormItem
          />
        </Col>
        <Col span={12}>
          <InputComponent
            name="email"
            label="Email Address (optional)"
            placeholder="Enter email"
            isFormItem
          />
        </Col>
        <Col span={12}>
          <InputComponent
            name="source"
            label="Source"
            placeholder="Choose a source"
            isFormItem
          />
        </Col>
      </Row>
      <StyledDivider titlePlacement="start">Delivery</StyledDivider>
      <Row gutter={12}>
        <Col span={24}>
          <InputComponent
            name="address"
            label="Delivery Address"
            placeholder="Street, estate, area"
            isFormItem
          />
        </Col>
        <Col span={24}>
          <InputComponent
            name="city"
            label="City"
            placeholder="city"
            isFormItem
          />
        </Col>
      </Row>
    </>
  );
};

export default CustomerFields;
