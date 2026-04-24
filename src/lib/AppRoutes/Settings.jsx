import { lazy } from "react";
import { SETTINGS_ROUTE } from "../routes";

const Settings = lazy(() => import("../../pages/settings"));

export const settingsRoutes = [{ path: SETTINGS_ROUTE, element: <Settings /> }];
