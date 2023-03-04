import Spinner from "../components/spinner.component";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <Spinner />
    </div>
  );
};

export default Loading;
