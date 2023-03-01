import { Outlet } from "react-router-dom";

import ExamplePopup from "./example-popup.widget";

const MessagesPopup = () => {
  return (
    <>
      <ExamplePopup />
      <Outlet />
    </>
  );
};

export default MessagesPopup;
