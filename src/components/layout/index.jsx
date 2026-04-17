import Layout from "./components/Layout";

const AppLayout = ({ children }) => {
  return <Layout routes={children} />;
};

export default AppLayout;
