import { createSelector } from "reselect";

const componentSelector = ({ component }) => component;

export const getIsModalOpen = createSelector([componentSelector], ({ isModalOpen }) => isModalOpen);

export const getCurrentModal = createSelector([componentSelector], ({ currentModal }) => currentModal);
