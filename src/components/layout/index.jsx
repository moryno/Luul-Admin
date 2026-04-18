import { routesConfig } from "@/lib";
import Layout from "./components/Layout";

const AppLayout = ({ children }) => {
  return <Layout routes={children} routesConfig={routesConfig} />;
};

export default AppLayout;
