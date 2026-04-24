import { lazy } from "react";
import { ORDERS_ROUTE } from "../routes";

const Orders = lazy(() => import("../../pages/orders"));

export const ordersRoutes = [{ path: ORDERS_ROUTE, element: <Orders /> }];
