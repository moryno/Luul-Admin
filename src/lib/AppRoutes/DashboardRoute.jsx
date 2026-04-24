import { lazy } from "react";
import { DASHBOARD_ROUTE } from "../routes";

const Dashboard = lazy(() => import("../../pages/dashboard"));

export const dashboardRoutes = [
  { path: DASHBOARD_ROUTE, element: <Dashboard /> },
];
