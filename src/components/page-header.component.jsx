const PageHeader = ({ title, description, toolbar }) => {
  return (
    <header className="flex justify-between items-center">
      <div className="grow">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base text-slate-500 leading-relaxed mb-8">{description}</p>
      </div>
      {toolbar && <div className="ml-4">{toolbar}</div>}
    </header>
  );
};

export default PageHeader;
