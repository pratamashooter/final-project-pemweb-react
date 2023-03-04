import { Outlet } from "react-router-dom";

import Sidenav from "./sidenav.component";
import MessagesPopup from "../widgets/messages-popup.widget";

const Layout = () => {
  return (
    <>
      <MessagesPopup />
      <Sidenav />
      <div className="ml-80 p-8">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
