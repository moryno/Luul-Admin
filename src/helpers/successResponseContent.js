import { LOGIN_ROUTE, ORDERS_ROUTE, PRODUCTS_ROUTE } from "@/lib";

export const successResponseContent = {
  [LOGIN_ROUTE]: {
    message: "Account",
    description: "Login was successful",
  },
  [PRODUCTS_ROUTE]: {
    message: "Success",
    description: "Creating product was successful",
  },
  [ORDERS_ROUTE]: {
    message: "Success",
    description: "Creating order was successful",
  },
};
