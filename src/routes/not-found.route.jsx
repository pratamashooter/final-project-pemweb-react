import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen min-h-screen py-5 px-3">
      <p className="text-2xl font-bold mb-2.5">Page Not Found</p>
      <Link to="/" className="text-sm text-slate-500 underline">
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
