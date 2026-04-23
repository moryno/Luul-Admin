import { createGlobalStyle } from "styled-components";

import DMSans from "@/assets/fonts/DMSans-VariableFont_opsz,wght.woff2";
import Grotesk from "@/assets/fonts/SpaceGrotesk-VariableFont_wght.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSans}) format('woff2-variations');
    font-weight: 100 900;   
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Space Grotesk';
    src: url(${Grotesk}) format('woff2-variations');
    font-weight: 100 900;   
    font-style: normal;
    font-display: swap;
  }

html, body, #root {
  font-family: ${({ theme }) => theme.font.body}, sans-serif; 
  height: 100%;
  background: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  margin: 0px !important;
  padding: 0px !important;
}

  h1, h2, h3, h4, h5, h6,
  h1.ant-typography,
  h2.ant-typography,
  h3.ant-typography,
  h4.ant-typography,
  h5.ant-typography,
  .ant-typography h1,
  .ant-typography h2,
  .ant-typography h3,
  .ant-typography h4,
  .ant-typography h5 {
    font-family: ${({ theme }) => theme.font.heading}, sans-serif !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
p{
  margin: 0 !important;
}
.ant-input-number-group-wrapper{
    width: 100%
}
.ant-input-affix-wrapper-disabled{
  color: ${({ theme }) => theme.palette.black};
}
.ant-input[disabled]{
  color: ${({ theme }) => theme.palette.black};
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.ant-tour {
    width: auto !important;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px ${({ theme }) =>
    theme.palette.background.default} inset !important;
  box-shadow: 0 0 0 1000px ${({ theme }) =>
    theme.palette.background.default} inset !important;
  -webkit-text-fill-color: ${({ theme }) => theme.palette.text.primary} !important;
}

.ant-input-affix-wrapper > input.ant-input:focus,
.ant-input-outlined:focus-within {
  border-width: 1px !important;
}

.ant-btn-primary {
  box-shadow: none !important;
}

.ant-input-affix-wrapper .anticon.ant-input-password-icon{
    color: ${({ theme }) => theme.palette.icon.secondary};
}

.ant-tooltip-arrow::before,.ant-tooltip-inner {
  background: ${({ theme }) => theme.palette.foreground.default} !important;
}

.ant-tooltip-inner {
  color: ${({ theme }) => theme.palette.text.primary} !important;
}

.ant-modal-close {
  color: ${({ theme }) => theme.palette.icon.secondary} !important;
}

svg {
  path:is([fill="#195038"]) {
    fill:  ${({ theme }) => theme.palette.primary.main} !important;
  }
}
 .ant-upload-list-item.ant-upload-list-item-error {
    padding: 0px !important;
    border: none !important;
    overflow: hidden;
    
  }
  
`;

export default GlobalStyles;
