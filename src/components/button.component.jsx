export const BUTTON_TYPES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
  WHITE: "WHITE",
  DANGER: "DANGER",
};

const getButtonTypeClass = (type) =>
  ({
    [BUTTON_TYPES.LIGHT]: "bg-slate-200 text-slate-800",
    [BUTTON_TYPES.DARK]: "bg-slate-800 text-white",
    [BUTTON_TYPES.WHITE]: "bg-white text-slate-800",
    [BUTTON_TYPES.DANGER]: "bg-red-500 text-white",
  }[type]);

const Button = ({ className, buttonType = BUTTON_TYPES.DARK, isExpanded, children, ...otherProps }) => {
  const buttonTypeClass = getButtonTypeClass(buttonType);

  return (
    <button
      className={`cursor-pointer rounded-none inline-block text-sm font-medium py-4 px-5 ${
        isExpanded && "w-full"
      } ${buttonTypeClass} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
