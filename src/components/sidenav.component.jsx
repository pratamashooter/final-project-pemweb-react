import { Link, Outlet, useLocation } from "react-router-dom";

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
  return (
    <aside className="fixed top-0 left-0 w-80 min-h-screen p-8 bg-white overflow-y-auto">
      <header className="py-4">
        <h3 className="text-2xl font-extrabold">POS System</h3>
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
