import { RiseLoader } from "react-spinners";
export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen Spinner w-full fixed top-0 z-10">
      <RiseLoader color="#3B9CF3" size={40} />
    </div>
  );
};
