import { Navigate } from "react-router-dom";

import { LOGIN_ROUTE, SETTINGS_ROUTE } from "../routes";

import { dashboardRoutes } from "./DashboardRoute";
import { ordersRoutes } from "./OrderRoute";
import { productsRoutes } from "./ProductRoute";
import { settingsRoutes } from "./Settings";
import { authRoutes } from "./AuthRoute";

const authorizedStructure = {
  fallbackPath: LOGIN_ROUTE,
  routes: [
    ...dashboardRoutes,
    ...ordersRoutes,
    ...productsRoutes,
    ...settingsRoutes,
  ],
};

const unAuthorizedStructure = {
  fallbackPath: LOGIN_ROUTE,
  redirectPath: "",
  routes: [...authRoutes],
};

const anonymousStructure = {
  routes: {
    path: LOGIN_ROUTE,
    element: <Navigate to={LOGIN_ROUTE} />,
  },
};

const alwaysStructure = {
  fallbackPath: SETTINGS_ROUTE,
  routes: [...authRoutes],
};

export {
  authorizedStructure,
  unAuthorizedStructure,
  anonymousStructure,
  alwaysStructure,
};
