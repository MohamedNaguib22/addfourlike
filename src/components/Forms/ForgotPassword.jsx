import { useContext, useState } from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { PopUp } from "../../Context/Context";
import { FormContext } from "../../Context/ContextForm";

export const ForgotPassword = () => {
  // UseContext 
  const contextPop = useContext(PopUp);
  const functionModel = contextPop.ModelUp;
  const contextForm = useContext(FormContext);
  const switchContext = contextForm.Switch;
  // State API
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // Function API
  function Submit(e) {
    e.preventDefault();
  }
  return (
    <div className="lg:w-[30%] bg-[#00000057] px-[30px] py-[80px] rounded-md w-full absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
      <div>
        <FaPlus
          className="rotate-45 text-white fixed top-[8%] right-[10%] z-[558] cursor-pointer"
          size={36}
          onClick={functionModel}
        />
        <MdOutlineArrowBackIos
          className="text-white fixed top-[8%] left-[10%] z-[558] cursor-pointer"
          size={36}
          onClick={() => switchContext("login")}
        />
      </div>
      <form
        onSubmit={Submit}
        className="flex flex-col gap-[20px]  w-[70%] mx-auto"
      >
        <div className="flex justify-center text-black">
          <span>
            <FaUser size={120} />
          </span>
        </div>
        <h1 className="text-[38px] text-white font-medium text-center">
          Password Recovery
        </h1>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-[18px]  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            New Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="password"
            name="floating_password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-[18px]  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-[#D9D7D7] border-1 border-[#707070]  font-[400] text-[24px] w-[80%] lg:w-[240px] h-[50px] rounded-[20px] "
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
