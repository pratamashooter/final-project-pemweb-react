import { useEffect, useState } from "react";
import pubsub from "sweet-pubsub";
import { v4 as uuid } from "uuid";

import { ReactComponent as CheckCicleSvg } from "../assets/icons/check-circle.svg";
import { ReactComponent as XCircleSvg } from "../assets/icons/x-circle.svg";
import { ReactComponent as XSvg } from "../assets/icons/x.svg";

export const TOAST_TYPES = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = ({ type, title, message }) => {
      const key = uuid();
      setToasts((prevValue) => [...prevValue.slice(-2), { key, type, title, message }]);
      setTimeout(() => removeToast(key), 5000);
    };

    pubsub.on("showToast", addToast);

    return () => pubsub.off("showToast", addToast);
  }, []);

  const removeToast = (key) => setToasts((prevValue) => prevValue.filter((toast) => toast.key !== key));

  const onCloseButtonClick = ({ currentTarget }) => {
    const key = currentTarget.getAttribute("data-key");
    removeToast(key);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {toasts.map(({ key, type, title, message }) => (
        <div key={key} className="flex items-start w-80 p-3.5 mt-2 bg-white">
          <div className="inline-flex justify-center items-center mt-1.5 mr-3">
            {type === TOAST_TYPES.SUCCESS ? (
              <CheckCicleSvg className="w-5 h-5 stroke-green-500" />
            ) : (
              <XCircleSvg className="w-5 h-5 stroke-red-500" />
            )}
          </div>
          <div className="grow overflow-hidden">
            <h5
              className={`text-sm font-semibold leading-relaxed ${
                type === TOAST_TYPES.SUCCESS ? "text-green-500" : "text-red-500"
              }`}
            >
              {title}
            </h5>
            <p
              className={`text-xs leading-relaxed ${type === TOAST_TYPES.SUCCESS ? "text-green-500" : "text-red-500"}`}
            >
              {message}
            </p>
          </div>
          <button type="button" className="ml-2" onClick={onCloseButtonClick}>
            <XSvg className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
