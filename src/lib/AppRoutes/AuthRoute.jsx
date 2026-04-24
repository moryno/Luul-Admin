import { lazy } from "react";
import { LOGIN_ROUTE } from "../routes";

const Login = lazy(() => import("../../pages/login"));

export const authRoutes = [{ path: LOGIN_ROUTE, element: <Login /> }];
