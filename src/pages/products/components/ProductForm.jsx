import {
  StyledPageWrapper,
  StyledPageTitle,
  StyledCard,
  InputComponent,
  UploadImage,
  ContainerButton,
  SelectComponent,
} from "@/components";
import { Col, Flex, Form, Row } from "antd";
import {
  StyledFormTitle,
  StyledInfoText,
  StyledSubText,
} from "../index.styled";
import { productSizeAttributes } from "@/lib";
import { useCategories } from "@/hooks";
import { getTitleCaseSentence } from "@/helpers";

const ProductForm = () => {
  const { categories, isLoading } = useCategories();

  const categoryOptions = categories.map((cat) => {
    if (cat)
      return {
        label: getTitleCaseSentence(cat.name),
        value: cat.id,
      };
    return [];
  });

  return (
    <StyledPageWrapper vertical gap="large">
      <StyledPageTitle level={3}>Product</StyledPageTitle>
      <Form layout="vertical">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <StyledCard>
              <Flex vertical gap="medium">
                <Flex vertical>
                  <StyledFormTitle level={4}>
                    Product Information
                  </StyledFormTitle>
                  <StyledSubText type="secondary">
                    Please fill all the required product fields.
                  </StyledSubText>
                </Flex>
                <Flex vertical>
                  <InputComponent
                    name="sku"
                    label="SKU"
                    placeholder="Input no SKU"
                    isFormItem
                  />
                  <InputComponent
                    name="name"
                    label="Product Name"
                    placeholder="Input product name"
                    isFormItem
                  />
                  <InputComponent
                    name="description"
                    label="Description"
                    placeholder="Input description"
                    isFormItem
                  />
                  <InputComponent
                    name="brand"
                    label="Brand"
                    placeholder="Input brand"
                    isFormItem
                  />
                  <SelectComponent
                    name="category"
                    label="Product Category"
                    placeholder="Select product category"
                    options={categoryOptions}
                    loading={isLoading}
                    isFormItem
                  />
                  <Row gutter={[12, 12]}>
                    <Col span={12}>
                      <SelectComponent
                        name="size"
                        label="Size"
                        mode="multiple"
                        placeholder="Input size"
                        options={productSizeAttributes}
                        isFormItem
                      />
                    </Col>
                    <Col span={12}>
                      <InputComponent
                        name="color"
                        label="Color"
                        placeholder="Input color"
                        isFormItem
                      />
                    </Col>
                  </Row>
                  <Row gutter={[12, 12]}>
                    <Col span={12}>
                      <InputComponent
                        name="price"
                        label="Price"
                        placeholder="Input price"
                        type="number"
                        isFormItem
                      />
                    </Col>
                    <Col span={12}>
                      <InputComponent
                        name="quantity"
                        label="Quantity"
                        placeholder="Input quantity"
                        type="number"
                        isFormItem
                      />
                    </Col>
                  </Row>

                  <InputComponent
                    name="instructions"
                    label="Instructions"
                    placeholder="Select status product"
                    isFormItem
                  />
                </Flex>
              </Flex>
            </StyledCard>
          </Col>
          <Col span={12}>
            <StyledCard>
              <Flex vertical gap="medium">
                <Flex vertical>
                  <StyledFormTitle level={4}>Image Product</StyledFormTitle>
                  <StyledSubText type="secondary">
                    <StyledInfoText>Note: </StyledInfoText>
                    Format photos SVG, PNG, or JPG (Max size 4mb)
                  </StyledSubText>
                </Flex>
                <UploadImage />
                <Flex align="center" justify="space-between">
                  <ContainerButton
                    title="Discard Changes"
                    type="ghost"
                    size="large"
                  />
                  <ContainerButton
                    title="Save Changes"
                    type="primary"
                    size="large"
                  />
                </Flex>
              </Flex>
            </StyledCard>
          </Col>
        </Row>
      </Form>
    </StyledPageWrapper>
  );
};

export default ProductForm;
