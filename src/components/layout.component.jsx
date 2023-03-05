import { Outlet } from "react-router-dom";

import Sidenav from "./sidenav.component";
import MessagesPopup from "../widgets/messages-popup.widget";

const Layout = () => {
  return (
    <>
      <MessagesPopup />
      <Sidenav />
      <div className={`p-8 md:ml-80`}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
