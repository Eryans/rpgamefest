import { Outlet } from "react-router-dom";
import Navigation from "../globalComponent/Navigation";

const Root = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main id="appRoot">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
