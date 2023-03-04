import { Link } from "react-router-dom";

import PageHeader from "../components/page-header.component";
import { sidenavMenus } from "../components/sidenav.component";

const Home = () => {
  return (
    <>
      <PageHeader title="Hello, Welcome" description="Officiis facilis nesciunt sit qui sed repellat quia." />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {sidenavMenus
          .filter(({ path }) => path !== "/home")
          .map(({ path, name, description }, key) => (
            <Link key={key} to={path} className="cursor-pointer w-full p-5 bg-white hover:bg-white/50">
              <h5 className="text-base font-semibold mb-1.5">{name}</h5>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
