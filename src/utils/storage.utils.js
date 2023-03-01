export const getItem = (key) => localStorage.getItem(key);

export const setItem = (key, value) => {
  localStorage.setItem(key, value);
  window.dispatchEvent(new Event("storage"));
};

export const clearItem = (key) => {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event("storage"));
};
