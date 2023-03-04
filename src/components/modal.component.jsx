import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentModal, setIsModalOpen } from "../store/component/component.action";
import { getCurrentModal, getIsModalOpen } from "../store/component/component.selector";

import { ReactComponent as XSvg } from "../assets/icons/x.svg";

const Modal = ({ modalKey, title, description, children }) => {
  const dispatch = useDispatch();

  const modalContainerRef = useRef(null);
  const isModalOpen = useSelector(getIsModalOpen);
  const currentModal = useSelector(getCurrentModal);

  const modalWrapperClickHandler = ({ target }) => {
    if (!modalContainerRef?.current?.contains(target)) {
      dispatch(setCurrentModal(modalKey));
      dispatch(setIsModalOpen(false));
    }
  };

  const closeModalClickHandler = () => {
    dispatch(setCurrentModal(modalKey));
    dispatch(setIsModalOpen(false));
  };

  return (
    <div
      className={`fixed top-0 left-0 flex justify-center items-start w-full h-screen overflow-x-hidden overflow-y-auto bg-black/20 z-40 transition-all ${
        isModalOpen && currentModal === modalKey ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={modalWrapperClickHandler}
    >
      <div ref={modalContainerRef} className="relative w-[576px] my-8 bg-white p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="grow">
            <h5 className="text-base font-bold mb-1">{title}</h5>
            <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
          </div>
          <button type="button" className="ml-2" onClick={closeModalClickHandler}>
            <XSvg className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
