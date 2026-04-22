import { useCallback } from "react";
import { Col, Flex, Form, Row, Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { ContainerButton, InputComponent, StyledDivider } from "@/components";
import { StyledProductSummary } from "../index.styled";

const { Text } = Typography;

const ProductFields = () => {
  const getFormFields = useCallback((fields, remove) => {
    const initialFields = [
      {
        fieldKey: -1,
        isListField: false,
        key: -1,
        name: -1,
      },
    ];
    const newFields = initialFields.concat(fields);

    return newFields.map(({ key, name, ...restField }) => (
      <Row gutter={12} key={key}>
        <Col span={10}>
          <InputComponent
            name="product"
            label="Product"
            placeholder="Enter name"
            isFormItem
            {...restField}
          />
        </Col>
        <Col span={5}>
          <InputComponent
            name="color"
            label="Color"
            placeholder="Select color"
            isFormItem
            {...restField}
          />
        </Col>
        <Col span={5}>
          <InputComponent
            name="size"
            label="Size"
            placeholder="Select size"
            isFormItem
            {...restField}
          />
        </Col>
        <Col span={3}>
          <InputComponent
            name="quantity"
            label="Qty"
            placeholder="Enter qty"
            type="number"
            isFormItem
            {...restField}
          />
        </Col>
        {key >= 0 && (
          <Col span={1}>
            <MinusCircleOutlined onClick={() => remove(name)} />
          </Col>
        )}
      </Row>
    ));
  }, []);

  return (
    <Flex vertical gap="small">
      <Form.List name="product">
        {(fields, { add, remove }) => {
          return (
            <>
              {getFormFields(fields, remove)}
              <Form.Item>
                <ContainerButton
                  type="dashed"
                  size="large"
                  block
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  title="Add another product"
                />
              </Form.Item>
            </>
          );
        }}
      </Form.List>
      <StyledProductSummary vertical gap={16}>
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
    </Flex>
  );
};

export default ProductFields;
