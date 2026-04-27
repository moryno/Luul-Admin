import { Form } from "antd";

import { InputComponent } from "@/components";
import {
  StyledLoginContainer,
  StyledLoginForm,
  StyledLoginFormSubtitle,
  StyledLoginFormError,
  StyledLoginFormHeader,
  StyledLoginFormTitle,
  StyledLoginFormItem,
  StyledLoginButton,
} from "./index.styled";

const Login = () => {
  return (
    <StyledLoginContainer align="center" justify="center">
      <StyledLoginForm name="basic" autoComplete="off" layout="vertical">
        <StyledLoginFormHeader
          vertical
          align="center"
          justify="center"
          gap="small"
        >
          <StyledLoginFormTitle level={3}>Login</StyledLoginFormTitle>
          <StyledLoginFormSubtitle>
            Sign in to your account
          </StyledLoginFormSubtitle>
          {/* { error && <StyledLoginFormError> { error.message}</StyledLoginFormError>} */}
        </StyledLoginFormHeader>
        <StyledLoginFormItem
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter email" }]}
        >
          <InputComponent type="email" placeholder="janedoe@mail.com" />
        </StyledLoginFormItem>

        <StyledLoginFormItem
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <InputComponent type="password" />
        </StyledLoginFormItem>
        <Form.Item>
          <StyledLoginButton
            title="Login"
            htmlType="submit"
            size="large"
            fullWidth
            // loading={loading}
          />
        </Form.Item>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default Login;
