import COMPONENT_ACTION_TYPES from "./component.type";

export const COMPONENT_INITIAL_STATE = {
  isModalOpen: false,
  isSidenavOpen: false,
  currentModal: null,
};

export const componentReducer = (state = COMPONENT_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case COMPONENT_ACTION_TYPES.SET_IS_MODAL_OPEN:
      return { ...state, isModalOpen: payload };
    case COMPONENT_ACTION_TYPES.SET_IS_SIDENAV_OPEN:
      return { ...state, isSidenavOpen: payload };
    case COMPONENT_ACTION_TYPES.SET_CURRENT_MODAL:
      return { ...state, currentModal: payload };
    default:
      return state;
  }
};
