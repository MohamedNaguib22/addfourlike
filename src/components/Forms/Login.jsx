import { useContext, useState } from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import { FormContext } from "../../Context/ContextForm";
import { PopUp } from "../../Context/Context";
import "./Forms.css"

export const Login = () => {
  // UseContext
  const contextPop = useContext(PopUp);
  const functionModel = contextPop.ModelUp;
  const contextForm = useContext(FormContext);
  const switchContext = contextForm.Switch;
  //  State API
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // Function Api
  function Submit(e) {
    e.preventDefault();
  }
  return (
    <div className="lg:w-[40%] xl:w-[30%] w-full FormsLogin md:w-[65%] bg-[#00000057] lg:px-[30px] py-[50px] rounded-md absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
      <div>
        <FaPlus
          className="rotate-45 text-white fixed top-[8%] right-[10%] z-[558] cursor-pointer"
          size={36}
          onClick={functionModel}
        />
      </div>
      <form
        onSubmit={Submit}
        className="flex flex-col gap-[20px] w-[90%] mx-auto"
      >
        <div className="flex justify-center text-black">
          <span>
            <FaUser size={80} />
          </span>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="text"
            name="floating_user"
            id="floating_user"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="floating_user"
            className="peer-focus:font-medium absolute text-[18px]  text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-[18px]  text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="flex justify-center">
          <button
            to="website"
            type="submit"
            className="text-white flex justify-center items-center bg-[#D9D7D7] border-1 border-[#707070]  font-[400] text-[20px] w-[60%] lg:w-[200px] h-[50px] rounded-[20px] "
          >
            Login
          </button>
        </div>
        <div className="flex w-full justify-between text-white text-[16px]">
          <div className="flex items-center">
            <div className="flex items-center  h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label htmlFor="remember" className="ml-2 font-medium text-white">
              Remember me
            </label>
          </div>
          <div onClick={() => switchContext("forgot")}>
            <p className="text-blue-700  lg:font-bold  cursor-pointer">
              Forgot Password?
            </p>
          </div>
        </div>
        <div className="text-black text-center relative text-[20px] after:h-[2px] after:w-[30%] after:bg-black after:content-[''] after:absolute after:top-[50%] after:right-[55%] before:h-[2px]  before:w-[30%] before:bg-black before:content-[''] before:absolute before:top-[50%] before:left-[55%]">
          <h1>OR</h1>
        </div>
        <h2 className="text-white text-[18px] text-center font-medium">
          if You Don`t Have Account ?
          <span
            className="text-blue-700 font-bold cursor-pointer"
            onClick={() => switchContext("signup")}
          >
            Register
          </span>
        </h2>
      </form>
    </div>
  );
};
