import { lazy } from "react";
import { PRODUCTS_ROUTE } from "../routes";

const Products = lazy(() => import("../../pages/products"));
const CreateProduct = lazy(
  () => import("../../pages/products/components/ProductForm"),
);

export const productsRoutes = [
  { path: PRODUCTS_ROUTE, element: <Products /> },
  { path: `${PRODUCTS_ROUTE}/new`, element: <CreateProduct /> },
];
