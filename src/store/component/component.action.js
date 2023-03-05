import { createAction } from "../../utils/reducer.utils";

import COMPONENT_ACTION_TYPES from "./component.type";

export const setIsModalOpen = (isModalOpen) => createAction(COMPONENT_ACTION_TYPES.SET_IS_MODAL_OPEN, isModalOpen);

export const setIsSidenavOpen = (isSidenavOpen) =>
  createAction(COMPONENT_ACTION_TYPES.SET_IS_SIDENAV_OPEN, isSidenavOpen);

export const setCurrentModal = (currentModal) => createAction(COMPONENT_ACTION_TYPES.SET_CURRENT_MODAL, currentModal);
