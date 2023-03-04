export const FormSelectOption = ({ label, value, children, ...otherProps }) => {
  return (
    <option value={value} {...otherProps}>
      {label ?? children}
    </option>
  );
};

const FormSelect = ({ label, children, className, ...otherProps }) => {
  return (
    <>
      {label && <label className="inline-block text-sm text-slate-600 mb-2">{label}</label>}
      <select
        className={`appearance-none border border-slate-200 rounded-none text-sm w-full py-4 px-5 focus:outline-none ${className}`}
        {...otherProps}
      >
        {children}
      </select>
    </>
  );
};

export default FormSelect;
