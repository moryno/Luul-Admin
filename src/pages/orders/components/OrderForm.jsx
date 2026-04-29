import { ContainerButton, StyledSecondaryButton } from "@/components";
import { Flex, Form, Space, Steps, Typography } from "antd";
import { useCallback, useMemo, useState } from "react";
import CustomerFields from "./CustomerFields";
import ProductFields from "./ProductFields";
import PaymentFields from "./PaymentFields";
import ShippingDetail from "./ShippingDetail";

const { Text } = Typography;

const FormButtonComponent = ({ step, handleStep, onClose }) => {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (step === 0) {
        handleStep(1);
      } else if (step === 1) {
        handleStep(2);
      } else if (step === 2) {
        handleStep(3);
      } else if (step === 3) {
        handleStep(0);
      }
    },
    [handleStep, step],
  );

  return (
    <Flex align="center" justify="space-between">
      <Flex>
        <Text type="secondary">{`Step ${step + 1} out of 3`}</Text>
      </Flex>
      <Space>
        <StyledSecondaryButton
          size="default"
          title="Cancel"
          onClick={onClose}
        />
        <ContainerButton
          title="Continue"
          type="primary"
          onClick={handleClick}
        />
      </Space>
    </Flex>
  );
};

const OrderForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const customerOrderForm = useMemo(() => {
    let formField = null;
    if (currentStep === 0) {
      formField = <CustomerFields />;
    } else if (currentStep === 1) {
      formField = <ProductFields />;
    } else if (currentStep === 2) {
      formField = <PaymentFields />;
    } else if (currentStep === 3) {
      formField = <ShippingDetail />;
    }
    return formField;
  }, [currentStep]);

  const handleStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  return (
    <Form layout="vertical" title="Order Form">
      <Flex vertical gap="middle">
        <Steps current={currentStep} items={items} />
        {customerOrderForm}
        <FormButtonComponent
          step={currentStep}
          handleStep={handleStep}
          onClose={onClose}
        />
      </Flex>
    </Form>
  );
};
const items = [
  {
    title: "Customer",
  },
  {
    title: "Product",
  },
  {
    title: "Payment",
  },
  {
    title: "Shipping",
  },
];
export default OrderForm;
