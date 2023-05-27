import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Root: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
