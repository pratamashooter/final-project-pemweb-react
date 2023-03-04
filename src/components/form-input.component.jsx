const FormInput = ({ label, className, ...otherProps }) => {
  return (
    <>
      {label && <label className="inline-block text-sm text-slate-600 mb-2">{label}</label>}
      <input
        className={`border border-slate-200 rounded-none text-sm w-full py-4 px-5 focus:outline-none ${className}`}
        {...otherProps}
      />
    </>
  );
};

export default FormInput;
