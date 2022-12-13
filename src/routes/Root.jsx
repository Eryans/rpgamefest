import { Outlet } from "react-router-dom";
import Layout from "../globalComponent/Layout";

const Root = () => {
  return (
    <>
      <Layout />
      <main id="appRoot">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
