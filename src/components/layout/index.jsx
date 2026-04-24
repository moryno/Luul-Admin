import {
  alwaysStructure,
  anonymousStructure,
  authorizedStructure,
  routesConfig,
  unAuthorizedStructure,
} from "@/lib";
import Layout from "./components/Layout";
import { useAuthUser } from "@/hooks";
import { useMemo } from "react";
import { generateRoutes } from "@/helpers";
import { useRoutes } from "react-router-dom";

const AppLayout = () => {
  const { isAuthenticated, user } = useAuthUser();

  const generatedRoutes = useMemo(() => {
    return generateRoutes({
      isAuthenticated,
      authorizedStructure,
      unAuthorizedStructure,
      anonymousStructure,
      alwaysStructure,
    });
  }, [isAuthenticated]);

  const routes = useRoutes(generatedRoutes);

  return <Layout routes={routes} routesConfig={routesConfig} />;
};

export default AppLayout;
