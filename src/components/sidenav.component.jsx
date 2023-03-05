import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { setIsSidenavOpen } from "../store/component/component.action";
import { getIsSidenavOpen } from "../store/component/component.selector";

import { ReactComponent as XSvg } from "../assets/icons/x.svg";

export const sidenavMenus = [
  {
    path: "/home",
    name: "Home Page",
    description: "Provident veniam laudantium et inventore saepe vitae.",
  },
  {
    path: "/product",
    name: "Manage Product",
    description: "Provident veniam laudantium et inventore saepe vitae.",
  },
  {
    path: "/order",
    name: "Create Order",
    description: "Provident veniam laudantium et inventore saepe vitae.",
  },
  {
    path: "/report",
    name: "Order Report",
    description: "Provident veniam laudantium et inventore saepe vitae.",
  },
];

const SidenavItem = ({ path, name }) => {
  const location = useLocation();
  const isActive = location.pathname.includes(path);

  return (
    <Link
      to={path}
      className={`cursor-pointer block w-full text-sm py-4 px-5 mb-4 hover:bg-slate-100 ${
        isActive ? "bg-slate-100" : "bg-transparent"
      }`}
    >
      {name}
    </Link>
  );
};

const Sidenav = () => {
  const dispatch = useDispatch();
  const isSidenavOpen = useSelector(getIsSidenavOpen);

  const sidebarToggleHandler = () => dispatch(setIsSidenavOpen(!isSidenavOpen));

  return (
    <aside
      className={`fixed top-0 w-80 min-h-screen p-8 bg-white overflow-y-auto transition-all md:left-0 ${
        isSidenavOpen ? "left-0" : "-left-80"
      }`}
    >
      <header className="flex justify-between items-center py-4">
        <h3 className="grow text-xl md:text-2xl font-extrabold">POS System</h3>
        <button
          type="button"
          className="cursor-pointer inline-flex justify-center items-center md:hidden"
          onClick={sidebarToggleHandler}
        >
          <XSvg className="w-6 h-6" />
        </button>
      </header>
      <div className="pt-4">
        {sidenavMenus.map(({ path, name }, key) => (
          <SidenavItem key={key} path={path} name={name} />
        ))}
      </div>
    </aside>
  );
};

export default Sidenav;
