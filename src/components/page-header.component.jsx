import { useDispatch, useSelector } from "react-redux";

import { setIsSidenavOpen } from "../store/component/component.action";
import { getIsSidenavOpen } from "../store/component/component.selector";

import { ReactComponent as MenuSvg } from "../assets/icons/menu.svg";

const PageHeader = ({ title, description, toolbar }) => {
  const dispatch = useDispatch();
  const isSidenavOpen = useSelector(getIsSidenavOpen);

  const sidebarToggleHandler = () => dispatch(setIsSidenavOpen(!isSidenavOpen));

  return (
    <>
      <button
        type="button"
        className="cursor-pointer inline-flex justify-center items-center mb-6 md:hidden"
        onClick={sidebarToggleHandler}
      >
        <MenuSvg className="w-6 h-6" />
      </button>
      <header className="flex justify-between items-center flex-wrap">
        <div className={`grow ${toolbar && "mr-4"}`}>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-base text-slate-500 leading-relaxed mb-8">{description}</p>
        </div>
        {toolbar}
      </header>
    </>
  );
};

export default PageHeader;
