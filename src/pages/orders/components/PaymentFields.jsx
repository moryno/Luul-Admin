import { InputComponent } from "@/components";

const PaymentFields = () => {
  return (
    <InputComponent
      name="mode"
      label="Payment Mode"
      placeholder="Choose paymnet mode"
      isFormItem
    />
  );
};

export default PaymentFields;
